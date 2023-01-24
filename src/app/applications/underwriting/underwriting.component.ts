import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Data, Router } from "@angular/router";
import { differenceInCalendarDays } from "date-fns";
import * as FileSaver from "file-saver";
import * as moment from "moment";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { HttpService } from "src/app/services/http.service";
import { GlobalservicesService } from "src/app/shared/globalservices.service";

@Component({
  selector: "app-underwriting",
  templateUrl: "./underwriting.component.html",
  styleUrls: ["./underwriting.component.css"],
})
export class UnderwritingComponent implements OnInit {
  _exportDocument: any;
  checked: boolean = false;
  _isEditOffer: boolean = false;
  filters: any;
  offerForm: FormGroup;
  productFilters: any;
  indeterminate: boolean = false;
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  loanApplicationData: any = [];
  total_count: any;
  currentDate: any;
  currentOfferId: any;
  _currentId: any;
  _currentDocType: any;
  _isViewDocument: any;
  console = console;
  blackBoxData: any;
  _checkedLoanList: any[];
  _activeLoans: any = [];
  today = new Date();
  api_calling_loader = {
    listLoader: false,
    accordian: false,
    button: false,
    xmlLoader: false,
    offerButton: false
  };
  stageMasterList: any;
  _currentStageStatus: any;
  _currentCibilData: any;
  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) > 0;
  };
  // Modal Boolean Values
  _isUpdateStatus: boolean = false;
  statusList: any;
  _currentDocument: any = "1";
  _isDocument: boolean = false;
  _isStatus: boolean = false;

  // Modal Boolean Values
  _isPullData: boolean = false;
  _isOpenModal: boolean = false;
  _currentFileName: any;
  fileList: any = [];
  _isDownload: boolean = false;
  _isVerify: boolean = false;
  _isUpload: boolean = false;
  _currentModalData: any;
  _currentLoanDetails: any;
  verifyRemarks: any;
  _isCibil: boolean = false;
  isFetchCibilSms: boolean = false;
  documentStatus = 1;
  // Page Filters and Pagination Data
  searchValue: any;
  page = 1;
  globalPageSize: any;
  productList: any = [];
  stageStatusList: any = [];
  currentDropDownId: any;
  partner: any;
  partnerList: any = [];
  remarksDescription: any;
  moved_by = 'all';
  storedParams: any;
  date_sorter = ''
  isVisibleThirdPartyResp: boolean;
  generateOfferId: any;
  _generate_offer: boolean;
  isVisible: boolean;
  expand_application_id
  attendance_date = ''
  isAttendanceVisible: boolean;
  attendance_data: any;
  generateloading: boolean;
  selectApplication: any;
  isMoveToDoc: boolean;
  checkOptionsOne: any;
  document_remark: string;
  constructor(
    public https: HttpService,
    public message: NzMessageService,
    public global: GlobalservicesService,
    public sanitize: DomSanitizer,
    public fb: FormBuilder, private route: ActivatedRoute, private router: Router
  ) {
    this.route.queryParams.subscribe((params: any) => {
      if (params?.loan_id) {
        // alert(params?.loan_id);
        this.storedParams = params?.loan_id
        this.searchValue = params?.loan_id;
        this.getFormLoanData();
      }
    });
  }

  ngOnInit(): void {
    this.global.setApplicationCount();
    this.page = 1;
    this.globalPageSize = this.global.globalPageSize;
    this.offerForm = this.fb.group({
      amountOffered: [null, [Validators.required, Validators.min(1)]],
      validitiy: [null],
      interest: [null],
    });
    this.getFormLoanData();
    this.fetchDocumentMaster()
  }

  isVisibleXMLModal = false;
  xmlDataResponse;
  onClickFetchXML(action, id) {
    this.isVisibleXMLModal = true
    this.api_calling_loader['xmlLoader'] = true;
    let data = {
      'source': 'Onboarding',
      'datapoint': 'get_xml_data',
      'endpoint': id,
      'xml_source': action
    };
    this.https.fetchXMLData(data).subscribe((res) => {
      console.log(res);
      this.xmlDataResponse = res?.data
      this.api_calling_loader['xmlLoader'] = false;
      // this.isVisibleXMLModal = false;
    }, error => {
      console.log(error);
      this.api_calling_loader['xmlLoader'] = false;
      // this.isVisibleXMLModal = false;
    })
  }

  sanatizeUrlToSafe(value) {
    // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
    return this.sanitize.bypassSecurityTrustResourceUrl(value);
  }
  onFocusMethod(type) {
    if (type == "product") {
      this.https.getAllProducts().subscribe((res: any) => {
        this.productList = res?.data;
        console.log(this.productList);
      });
    } else if (type == "status") {
      let params = {
        source: "Onboarding",
        endpoint: "3",
        datapoint: "get-stage-statuses",
      };
      this.https.getStatusStageWise(params).subscribe((res: any) => {
        this.stageStatusList = res?.data;
        console.log(this.stageStatusList);
      });
    } else if (type == "partner") {
      this.https.fetchPartner().subscribe((res: any) => {
        this.partnerList = res?.data?.results?.filter((res) => {
          if (res?.name) {
            return res;
          }
        });
      });
    }
  }
  dateFormat = 'dd/yyyy';
  date = '';
  stageFilters: any
  stageList = [
    { name: 'pan' },
    { name: 'aadhar' },
    { name: 'company' },
    { name: 'name' },
    { name: 'income' }
  ]
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
  };
  getFormLoanData(tableFilter?) {
    this.api_calling_loader["listLoader"] = true;
    this.loanApplicationData = [];
    var data;

    if (this.selectedTabFilter !== 'B2B' && this.selectedTabFilter !== 'D2C') {
      data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=3', 'source': 'Onboarding' }
    } else if (this.selectedTabFilter == 'B2B') {
      data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=3&app_prod_type=B2B', 'source': 'Onboarding' }
    } else if (this.selectedTabFilter == 'D2C') {
      data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=3&app_prod_type=D2C', 'source': 'Onboarding' }
    }

    // data = {
    //   datapoint: "loan_application",
    //   endpoint: "LoanApplication?stage_id=3",
    //   source: "Onboarding",
    // };

    // if (tableFilter) {
    //   this.page = tableFilter?.pageIndex;
    //   this.globalPageSize = tableFilter?.pageSize;
    //   data["page"] = tableFilter?.pageIndex;
    //   data["limit"] = tableFilter?.pageSize;
    // } else {
    //   data["page"] = this.page;
    //   data["limit"] = this.globalPageSize;
    // }
    data['page'] = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1
    data['limit'] = tableFilter?.pageSize ? tableFilter?.pageSize : this.globalPageSize
    data['flag'] = this.selectedTabFilter
    if (this.filters) {
      // data["page"] = 1;
      data["status"] = this.filters;
    }
    if (this.productFilters) {
      // data["page"] = 1;
      data["product_master"] = this.productFilters;
    }
    if (this.stageFilters) {
      // data['page'] = 1
      data['step'] = this.stageFilters
    }
    if (this.searchValue) {
      // data["page"] = 1;
      data["name"] = this.searchValue;
    }
    if (this.partner) {
      // data["page"] = 1;
      data["company"] = this.partner;
    }

    if (this.date_sorter) {
      data['date_sorter'] = this.date_sorter
    }
    data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      data['moved_by'] = this.moved_by,
      this.https.fetchLoanApplicationList(data).subscribe(
        (res) => {
          if (res?.success) {
            if (this._activeLoans) {
              this._activeLoans.forEach((element) => {
                this.expandSet.delete(element?.id);
              });
            }
            // this.global.setApplicationCount();
            this.loanApplicationData = res?.data?.results;
            this.total_count = res?.data?.total_count;
            this.api_calling_loader["listLoader"] = false;
          } else {
            this.api_calling_loader["listLoader"] = false;
            this.total_count = null
          }
        },
        (err) => {
          this.api_calling_loader["listLoader"] = false;
        }
      );
  }

  generateOfferForCorrespondingApplication(id) {
    let data = {
      'source': "Onboarding",
      'datapoint': "admin_generate_offer",
      'application': id
    }
    this.api_calling_loader["listLoader"] = true;
    this.https.generateOfferForCorrespondingApplication(data).subscribe((res: any)=>{
      if(res?.success){
        this.api_calling_loader["listLoader"] = false;
        this.message.success(res?.message)
        this.getFormLoanData();
      } else {this.message.error(res?.message); this.api_calling_loader["listLoader"] = false;}
    })
    // this.api_calling_loader['offerButton'] = true
    //   let form_data = { 
    //         source: 'Onboarding', 
    //         datapoint: 'manual_offer', 
    //         application_id: this.generateOfferId,
    //         final_amount: Number(this.final_amount),
    //         final_max_amount: Number(this.final_amount_max)
    //   }
    //   this.https.editLoanData(form_data).subscribe((res: any) => {
    //         if (res?.success) {
    //               this.api_calling_loader['button'] = false
    //               this.message.success(res?.message);
    //               this.handleCancel();
    //               // this.getIdWiseData(this._currentModalData['application']);
    //               this.getFormLoanData()
    //         } else {
    //               this.api_calling_loader['button'] = false
    //               this.message.error(res?.message);
    //         }
    //   }, err => {
    //         this.api_calling_loader['button'] = false
    //         // this.message.error(err);
    //   })
  }

  final_amount_max: any
  final_amount: any
  _generateOffer: boolean
  generateOffer(id) {
    this.generateOfferId = id
    this._generate_offer = true
    this._generateOffer = true
  }

  pdfData: any;
  pdf_viewer_object_values = {
    'boolean': false,
    'url': '',
    'title': ''
  }
  // <<<<<<< HEAD

  //   fetchCibilPDF(){
  // =======

  fetchCibilPDF(id) {
    // >>>>>>> 7bec92bfd52a785bb6c4258e3b39f2211a212131
    let data = {
      datapoint: "loan_application",
      endpoint: `UserKycCibil?loan_application=` + id,
      source: "Onboarding",
    };
    const generateloader = this.message.loading('Generating PDF..', { nzDuration: 0 }).messageId;
    this.https.fetchLoanApplicationList(data).subscribe((res: any) => {
      if (res?.data?.results[0]?.credit_pdf) {
        this.pdf_viewer_object_values['title'] = 'Show Cibil PDF'
        this.pdf_viewer_object_values['url'] = res?.data?.results[0]?.credit_pdf
        this.pdfData = this.sanitize.bypassSecurityTrustResourceUrl(this.pdf_viewer_object_values['url']);
        this.pdf_viewer_object_values['boolean'] = true
        this.message.remove(generateloader);
        console.log(this.router.url)
      } else {
        this.message.remove(generateloader);
        this.message.error('No Cibil PDF Found');
      }
      // this.pdfData = res?.data?.results[0];
    }, error => {
      this.message.remove(generateloader);
      console.log(error);
    })
  }



  getIdWiseData(id?, index?) {
    // return;
    this.blackBoxData = null;
    this.api_calling_loader["accordian"] = true;
    let data = {
      datapoint: "loan_application",
      endpoint: "LoanApplication?id=" + id,
      source: "Onboarding",
    };
    this.https.fetchLoanApplicationList(data).subscribe(
      (res) => {
        if (res) {
          this.api_calling_loader["accordian"] = false;
          this._activeLoans.push(res?.data?.results[0]);
          this.loanApplicationData[index].expanddata = res?.data?.results[0];
        } else {
          this.api_calling_loader["accordian"] = false;
        }
      },
      (error) => {
        this.api_calling_loader["accordian"] = false;
      }
    );
  }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean, index?): void {
    if (checked) {
      this.expandSet.clear()
      this._currentId = id
      this.expandSet.add(id);
      this.https.expnadList.next(this.expandSet)
    } else {
      this.expandSet.delete(id);
      console.log("Deleted array of active ids", this._activeLoans);
    }
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(
      ({ disabled }) => !disabled
    );
    this.checked = listOfEnabledData.every(({ id }) =>
      this.setOfCheckedId.has(id)
    );
    this.indeterminate =
      listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) &&
      !this.checked;
  }

  updateStatus(type?, data?) {
    this._isUpdateStatus = true;
    this._currentLoanDetails = data;
    switch (type) {
      case "status":
        this._isStatus = true;
        this.https.getStageMaster(3).subscribe((res) => {
          if (res?.success) {
            this.stageMasterList = res?.data;
          }
        });
        console.log(this._checkedLoanList);
        break;
      case "download":
        this._isDocument = true;
        break;
      case "viewDocument":
        this._isViewDocument = true;
        break;
      case "editOffer":
        this._isEditOffer = true;
        this.api_calling_loader["accordian"] = true;
        let params = {
          source: "Onboarding",
          datapoint: "get-section-offer",
          application: this._currentLoanDetails["id"],
          section: "underwriting",
        };
        this.https.fetchEditofferData(params).subscribe(
          (res: any) => {
            if (res?.success) {
              this.currentOfferId = res?.data?.offer_id;
              this.offerForm.get("amountOffered").setValue(res?.data?.amount);
              this.offerForm.get("validitiy").setValue(res?.data?.validity);
              this.offerForm.get("interest").setValue(res?.data?.interest);
              this.api_calling_loader["accordian"] = false;
            } else {
              this.message.error(res?.message);
              this.api_calling_loader["accordian"] = false;
            }
            this.api_calling_loader["accordian"] = false;
          },
          (err) => {
            this.message.error(err);
          }
        );

        break;
    }
  }


  isVisibleUploadedImage = false;
  storedSelfieImage: any;
  onClickPreviewImage(id) {
    this.isVisibleUploadedImage = true;
    this.api_calling_loader['previewSelfie'] = true;
    let data = {
      'source': 'Onboarding',
      'datapoint': 'get_aadhar_selfie_image',
      'endpoint': id
    }
    this.https.fetchXMLData(data).subscribe((res: any) => {
      if (res?.success) {
        this.api_calling_loader['previewSelfie'] = false;
        this.storedSelfieImage = res.data
      } else {
        this.message.error(res?.message);
        this.api_calling_loader['previewSelfie'] = false;
      }
    }, error => {
      // this.message.error(res?.message);
      this.api_calling_loader['previewSelfie'] = false;
    })
  }

  handleCancel() {
    this._isOpenModal = false;
    this._isViewDocument = false;
    this._isUpload = false;
    this._isVerify = false;
    this._isUpdateStatus = false;
    this._isStatus = false;
    this._isDocument = false;
    this._isEditOffer = false;
    this._isPullData = false;
    this._isCibil = false;
    this.isFetchCibilSms = false;
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = null
    this._generateOffer = false;
    this.isVisible = false
    this.isAttendanceVisible = false
    this.expand_application_id = ''
    this.isMoveToDoc = false
  }

  handleOk(type?) {
    switch (type) {
      case "offer":
        this.api_calling_loader["button"] = true;
        let value = {
          source: "LMS",
          datapoint: "edit_proposed_offers",
          endpoint: this.currentOfferId,
          amount: this.offerForm.get("amountOffered").value,
        };
        this.https.editAdAcceptedOffer(value).subscribe(
          (res: any) => {
            if (res.success) {
              this.message.success(res?.message);
              this.api_calling_loader["button"] = false;
              this.handleCancel();
              this.getFormLoanData();
            } else {
              this.message.error(res?.message);
              this.api_calling_loader["button"] = false;
            }
          },
          (error) => { }
        );
        break;
      case "verify":
        this.api_calling_loader["button"] = true;
        let params = {
          source: "Onboarding",
          datapoint: "verify_kyc_doc",
          application_id: this._currentModalData["application"],
          kyc_document_id: this._currentModalData?.id,
          status: this.documentStatus == 1 ? "Accepted" : "Rejected",
          reason: this.verifyRemarks,
        };
        console.log("export this file", this._currentModalData, params);
        this.https.verifyLoanDocument(params).subscribe(
          (res: any) => {
            if (res?.success) {
              this.api_calling_loader["button"] = false;
              this.message.success(res?.message);
              this.handleCancel();
              this.global.setApplicationCount();
              this.getIdWiseData(this._currentModalData["application"]);
            } else {
              this.api_calling_loader["button"] = false;
              this.message.error(res?.message);
            }
          },
          (err) => {
            this.api_calling_loader["button"] = false;
            this.message.error(err);
          }
        );

        break;
      case "uploadDocument":
        this.api_calling_loader["button"] = true;
        let uploadDoc = {
          source: "Onboarding",
          datapoint: "upload_kyc_doc",
          application_id: this._currentModalData["application"],
          file: this._currentFileName,
        };
        if (this._currentModalData?.id) {
          uploadDoc["kyc_document_id"] = this._currentModalData?.id;
        }
        console.log(uploadDoc, "For Upload Document");

        this.https.uploadLoanDocument(uploadDoc).subscribe(
          (res: any) => {
            if (res?.success) {
              this.api_calling_loader["button"] = false;
              this.fileList = [];
              this.message.success(res?.message);
              this.handleCancel();
            } else {
              this.api_calling_loader["button"] = false;
              this.fileList = [];
              this.message.error(res?.message);
              this.handleCancel();
            }
          },
          (err) => {
            this.api_calling_loader["button"] = false;
            this.message.error(err);
          }
        );
        break;
      case "StatusModal":
        this.api_calling_loader["button"] = true;
        let data = {
          source: "Onboarding",
          datapoint: "update_multi_application_status",
          remarks: this.remarksDescription,
          stage_id: this._currentStageStatus,
          applications: JSON.stringify(this._checkedLoanList),
        };
        this.https.updateMultipleLoanApp(data).subscribe(
          (res) => {
            if (res.success) {
              this._currentStageStatus = null;
              this.remarksDescription = ''
              this.setOfCheckedId.clear();
              this.api_calling_loader["button"] = false;
              this.handleCancel();
              this.message.success(res?.message);
              this.global.setApplicationCount();
              this.getFormLoanData();
            } else {
              this.message.error(res?.message);
              this.api_calling_loader["button"] = false;
              this.handleCancel();
            }
          },
          (error) => {
            this.message.error(error);
            this.api_calling_loader["button"] = false;
          }
        );
        break;
      case 'generate_offer':
        this.api_calling_loader['offerButton'] = true
        let form_data = {
          source: 'Onboarding',
          datapoint: 'manual_offer',
          application_id: this.generateOfferId,
          final_amount: Number(this.final_amount),
          final_max_amount: Number(this.final_amount_max)
        }
        this.https.editLoanData(form_data).subscribe((res: any) => {
          if (res?.success) {
            this.api_calling_loader['offerButton'] = false
            this.message.success(res?.message);
            this.handleCancel();
            // this.getIdWiseData(this._currentModalData['application']);
            this.getFormLoanData()
          } else {
            this.api_calling_loader['offerButton'] = false
            this.message.error(res?.message);
          }
        }, err => {
          this.api_calling_loader['offerButton'] = false
          // this.message.error(err);
        })
        break
      case 'attendance':
        var newdata = {
          application: this.expand_application_id,
          start_date: this.attendance_date[0] ? moment(this.attendance_date[0]).format("YYYY-MM-DD") : '',
          end_date: this.attendance_date[0] ? moment(this.attendance_date[0]).format("YYYY-MM-DD") : ''
        }
        this.api_calling_loader['button'] = true
        this.isVisible = false
        this.https.pullAttendance(newdata).subscribe((res: any) => {
          if (res?.success) {
            this.attendance_data = res.data
            if (this.attendance_data[0]) {
              this.isAttendanceVisible = true
            } else {
              this.message.success(res.message)
            }
          } else {
            this.message.error(res?.message)
          }
          this.api_calling_loader['button'] = false;
        }, err => {
          this.api_calling_loader['button'] = false;
          this.message.error(err)
        })
        break;
    }
  }

  checkDisabledStatus() {
    this._checkedLoanList = Array.from(this.setOfCheckedId);
    if (this._checkedLoanList.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  selectedTabFilter: any = 'all'
  onClickChangeTabFilter(e) {
    console.log(e);
    this.resetFilters();
  }

  exportData(file_formate?) {
    // let data = {
    //   source: "Onboarding",
    //   datapoint: "export_data",
    //   records: JSON.stringify(this._checkedLoanList),
    //   file_type: file_formate,
    // };
    let data = { source: 'Onboarding', datapoint: 'export_application_by_stage', stage_id: 3 }
    if (this.partner) {
      // data['page'] = 1
      data['company'] = this.partner
    }
    data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '';
    data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '';
    const generateloader = this.message.loading("Generating File..", {
      nzDuration: 0,
    }).messageId;
    this.https.fetchExportData(data).subscribe(
      (res) => {
        this._exportDocument = res;
        this.https.exportMasterSectionModule(
          res,
          "export",
          file_formate,
          generateloader
        );
      },
      (error) => {
        this.message.remove(generateloader);
        console.log(error);
      }
    );
  }

  openDocumentModal(type?, data?, loanData?) {
    this._currentModalData = data;
    this._currentLoanDetails = loanData;
    if (type == "download") {
      let data = {
        source: "Onboarding",
        datapoint: "download_document",
        endpoint: "kyc",
        id: this._currentModalData?.id,
      };
      console.log(data);
      this.https.downloadDocuments(data).subscribe((res: any) => {
        if (res?.success) {
          // let url = window.URL.createObjectURL(blob)
          var data = new Blob([res?.data?.file], {
            type: "text/plain;charset=utf-8",
          });
          FileSaver.saveAs(data, "text.txt");
        }
      });
    } else {
      this._isOpenModal = true;
      this._isUpdateStatus = true;
      console.log(this._currentModalData);
      switch (type) {
        case "viewDocument":
          this._isViewDocument = true;
          // this.generateBase64View(this._currentModalData?.file);
          break;
        case "verify":
          this._isVerify = true;
          break;
        case "upload":
          this._isUpload = true;
          break;
      }
    }
  }

  beforeUploadName = (file: NzUploadFile) => {
    this.fileList = [];
    this.fileList = this.fileList.concat(file);
    this._currentFileName = this.fileList[0];
    console.log(this._currentFileName, file);
    // this.generateBase64View(file)
    return false;
  };

  // Get Cibil Data API
  getCibilScoreData(type?, id?) {
    this._isUpdateStatus = true;
    this.isFetchCibilSms = true;
    let data = { source: "Onboarding", endpoint: id };
    if (type == "cibil" && id) {
      this._isCibil = true;
      this._currentLoanDetails = id;
    } else if (type == "sms" && id) {
      this._isCibil = false;
      this._currentLoanDetails = id;
    }
  }

  // Pull Cibil Methods
  pullDataSMSCibil(type?, data?) {
    this._isUpdateStatus = true;
    this._isPullData = true;
    switch (type) {
      case "thirdPartyCibil":
        this._currentLoanDetails = data?.id;
        this._isCibil = true;
        break;
      case "downloadCibil":
        break;
      case "thirdPartySMS":
        this._currentLoanDetails = data?.user?.id;
        this._isCibil = false;
        break;
    }
  }

  // Pull BlackBox Data
  getBlackBoxData(id) {
    let data = {
      source: "Onboarding",
      datapoint: "pull_black_box",
      endpoint: id,
    };
    this.https.pullBlackBoxData(data).subscribe((res: any) => {
      if (res?.success) {
        this.blackBoxData = res?.data;
      }
    });
  }

  thirdPartyDataResponse = [];
  onClickShowJSONPreview(res) {
    this.isVisibleThirdPartyResp = true
    this.api_calling_loader['xmlLoader'] = true;
    this.thirdPartyDataResponse = res
    this.api_calling_loader['xmlLoader'] = false;
  }

  resetFilters(type?) {
    if (this.storedParams) {
      this.router.navigate(["applications/underwriting"]);
    }
    this.date = '';
    if (type == "offer") {
      this.offerForm.controls.amountOffered.reset();
    } else {
      this.date_sorter = ''
      this.stageFilters = null;
      this.productFilters = null;
      this.filters = null;
      this.searchValue = null;
      this.partner = null;
      this.getFormLoanData();
    }
  }

  confirm(id) {
    let data;
    this.https.toggleApplicationTODormantBasedOnTimeSpan(id, data).subscribe((res: any) => {
      if (res?.success) {
        this.message.success(res.message);
        this.getFormLoanData();
      } else {
        this.message.error(res.message);
      }
    })
  }

  showAttendance(id) {
    const generateloader = this.message.loading('Generating file..', { nzDuration: 0 }).messageId;
    this.https.showAttendance(id).subscribe((res: any) => {
      this.https.exportMasterSectionModule(res, 'attendance-' + id, 'xlsx', generateloader)
      this.message.remove(generateloader);
    }, error => {
      this.message.remove(generateloader);
      console.log(error);
    })
  }
  pullprofile(id) {
    this.generateloading = true
    this.https.pullprofile(id).subscribe((res: any) => {
      if (res.success) {
        this.getIdWiseData(id, this._currentId)
        this.message.success(res.message)

      } else {
        this.message.error(res.message)
      }
      // this.https.exportMasterSectionModule(res, 'attendance-' + id, 'xlsx', generateloader)
      this.generateloading = false

    }, error => {
      this.generateloading = false
      console.log(error);
    })
  }
  openMoveToModal(id) {
    this.isMoveToDoc = true
    this.selectApplication = id
  }

  moveToPendingDocumentUploadStage(val) {
    let count = 0
    this.checkOptionsOne.forEach(element => {
      if (!element.checked) {
        count++
      }
    });
    if (val) {
      if (count == this.checkOptionsOne.length) {
        this.message.error('please select document')
        return
      }
      if (!this.document_remark) {
        this.message.error('please enter remarks')
        return
      }
    }
    this.api_calling_loader['listLoader'] = true;
    // return;
    let data = {
      "loan_application": this.selectApplication,
      // "source": "Onboarding",
      // "datapoint": "update_document_needed",
      "remarks": this.document_remark,
      "requested_document": [],
      // "change_flag": val
      "option": "add"
    }
    this.checkOptionsOne.forEach(element => {
      if (element.checked) {
        data.requested_document.push(element.name)
      }
    });
    console.log(data)
    // return
    this.https.moveToDocumentPending(data).subscribe((res: any) => {
      if (res?.success) {
        this.message.success(res?.message);
        this.resetFilters();
        this.isMoveToDoc = false
        this.api_calling_loader['listLoader'] = false;
        this.document_remark = ''
        this.checkOptionsOne.forEach(res => {
          res.checked = false
        })
        this.getFormLoanData()
        this.global.setApplicationCount();
      } else {
        this.api_calling_loader['listLoader'] = false;
        this.message.error(res?.message)
      }
    }, error => {
      this.api_calling_loader['listLoader'] = false;
    })
  }
  fetchDocumentMaster() {
    let data;
    this.https.fetchDocumentMaster(data).subscribe(res => {
      this.checkOptionsOne = res['data'].results
      this.checkOptionsOne.forEach(element => {
        element.label = element.name
        element.checked = false
      });
    })
  }
  ngOnDestroy(): void {
    this.https.expnadList.next()
  }
}
