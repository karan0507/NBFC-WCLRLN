import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { HttpService } from "src/app/services/http.service";
import { saveAs } from "file-saver";
import * as FileSaver from "file-saver";
import * as moment from "moment";
import { NzImageService } from "ng-zorro-antd/image";
import { parseJSON } from "date-fns";
import { DatePipe } from "@angular/common";

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

@Component({
  selector: "app-add-edit-partners",
  templateUrl: "./add-edit-partners.component.html",
  styleUrls: ["./add-edit-partners.component.css"],
})
export class AddEditPartnersComponent implements OnInit {
  addEditProductForm!: FormGroup;
  documentBasedForm: FormGroup;
  documentArray : any = [];
  index: any;
  isVisible;
  selectedDocument;
  partnerId: any;
  isVerified: any;
  isEdit: boolean;
  stateArr: any;
  corpArr: any;
  debounce: any;
  apiLoader = {
    formSave: false,
    saveAddNew: false,
  };
  dateTillEnd = [];
  billDate = [{ id: 1 }, { id: 5 }, { id: 10 }, { id: 15 }];
  listOfMasterPartner: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private message: NzMessageService,
    private nzImageService: NzImageService
  ) {
    this.getListOfDocumentRequired();
  }

  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      const data = {
        id: i + 1,
      };
      this.dateTillEnd.push(data);
    }
    this.getListOfMasterPartner();
    this.createMasterProductForm();
    this.getListOfStates();
    this.getListOfCorp();

    this.route.queryParams.subscribe((params) => {
      if (params["id"]) {
        this.isEdit = true;
        this.partnerId = params["id"];
        if (this.partnerId) {
          this.fetchPartnerDetail();
        }
      } else {
        this.isEdit = false;
        // this.masterParnerPayout = null
        // this.createMasterProductForm();
        // this.getListOfDocumentRequired();
      }
    });
  }

  getListOfMasterPartner(action?) {
    let data = {
      page: 1,
      limit: 30,
    };
    this.http.fetchMasterPartner(data).subscribe(
      (res: any) => {
        console.log(res);
        this.listOfMasterPartner = res?.data?.results;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getListOfStates() {
    let action = "get-states";
    this.http.fetchDetailForUserModuleDropDown(action).subscribe((res: any) => {
      console.log(res);
      this.stateArr = res?.data;
    });
  }

  getListOfCorp() {
    let action = "get-corporation-category";
    this.http.fetchDetailForUserModuleDropDown(action).subscribe((res: any) => {
      console.log(res);
      this.corpArr = res?.data;
    });
  }

  onSearchGetList(e, action) {
    if (action === "corp") {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        // this.getListOfCorp(search_param);
      }, 500);
    }
  }

  fetchPartnerDetail() {
    this.http.getPartnerListDetail(this.partnerId).subscribe((res: any) => {
      console.log(res);
      this.setRetrievedDataInForm(res?.data);
      // this.createMasterProductForm(res?.data);
    });
  }

  setRetrievedDataInForm(data) {
    for (var i in this.addEditProductForm.value) {
      if (
        i == "partner_master" ||
        i == "state" ||
        i == "corporation_category"
      ) {
        data[i] = data[i]?.id;
      }
      if (i != "document_data" && i != "nach_date_time_mappings") {
        if (data[i]) {
          this.addEditProductForm.controls[i].setValue(data[i], {
            emitEvent: false,
          });
        }
      }
      this.addEditProductForm.patchValue({
        flag:data ? data?.corporate_limit_settings?.flag :  data?.corporate_limit_settings?.flag,
        max_salary_percent: data ? data?.corporate_limit_settings?.max_salary_percent : null,
        ewa_percent: data ? data?.corporate_limit_settings?.ewa_percent : null,
        permanent_min:data ? data?.corporate_limit_settings?.permanent_min : null,
        permanent_max:data ? data?.corporate_limit_settings?.permanent_max : null,
        contractual_min:data ? data?.corporate_limit_settings?.contractual_min : null,
        contractual_max: data ? data?.corporate_limit_settings?.contractual_max : null,
        permanent_agreed: data ? data?.corporate_limit_settings?.permanent_agreed : null,
        contractual_agreed: data ? data?.corporate_limit_settings?.contractual_agreed : null,
      })
    }
    this.setFormData(data);
    this.setFormDataForNach(data);
  }

  setFormDataForNach(data) {
    if (data) {
      const nachArray = [];
      data.nach_date_time_mappings?.forEach((element) => {
        var date1 = new Date("2020-06-24" + element?.time_of_day);
        const nachDateTime = {
          day_of_month: element?.day_of_month,
          time_of_day: moment("2020-06-24 " + element?.time_of_day),
        };
        this.addNach(nachDateTime);
      });
    }
  }
  setFormData(data) {
    // if (data) {
    //   const documentArray = [];
    //   data.documents?.forEach((element) => {
    //     const documents = {
    //       pk: element?.document_master["id"],
    //       documents: element?.document_file,
    //       name: element?.document_master["name"],
    //       document_name: element?.file_name,
    //       id: element?.id,
    //       is_verified: element?.is_verified,
    //     };
    //     documentArray.push(documents);
    //     this.documentArray?.forEach((entity, index) => {
    //       if (entity.pk == element?.document_master["id"]) {
    //         this.documentArray.splice(index, 1);
    //       }
    //     });
    //     this.addSkills(documents);
    //   });
    // }
    if (data) {
      const documentArray = [];
      data.documents?.forEach((element) => {
        let documents;
        if(element?.document_master?.require_front_back){
            documents = {
              pk: element?.document_master["id"],
              name: element?.document_master["name"],
              document_name: null,
              document_name_front: element?.front_file_name,
              document_name_back: element?.back_file_name,
              documents: null,
              documents_front: element?.document_file_front ? element?.document_file_front : null,
              documents_back:  element?.document_file_back ? element?.document_file_back : null,
              id: element?.id,
              is_verified: element?.is_verified,
              front_back_flag: element?.document_master?.require_front_back,
              display_name: null,
              display_name_front:  element?.document_master?.name + " Front",
              display_name_back:   element?.document_master?.name + " Back",
              isdelete: false,
            };
            documentArray.push(documents);
            this.addSkills(documents);
        } else if(!element?.document_master?.require_front_back) {
          documents = {
            pk: element?.document_master["id"],
            name: element?.document_master["name"],
            document_name: element?.file_name ? element?.file_name : null,
            document_name_front: null,
            document_name_back: null,
            documents: element?.document_file ? element?.document_file : null,
            documents_front: null,
            documents_back:  null,
            id: element?.id,
            is_verified: element?.is_verified,
            front_back_flag: element?.document_master?.require_front_back,
            display_name: element?.document_master?.name,
            display_name_front:  null,
            display_name_back: null,
            isdelete: false,
          };
          // documentArray.push(documents);
          if(documents?.pk == 3){
            this.documentArray?.forEach((entity, index) => {
              if (entity.pk == element?.document_master["id"]) {
                this.documentArray.splice(index, 1);
              }
            });
          }
          this.addSkills(documents);
        }
        // this.documentArray?.forEach((entity, index) => {
        //   if (entity.pk == element?.document_master["id"]) {
        //     this.documentArray.splice(index, 1);
        //   }
        // });
        // this.addSkills(documents);
      });
    }
  }

  async onClickShowUploadedDocument(e, action?) {
    // if (e?.value?.documents?.uid) {
    //   let doc = await getBase64(e?.value?.documents);
    //   const images = [];
    //   const img = {
    //     src: doc,
    //     width: "600px",
    //     height: "400px",
    //     alt: "ng-zorro",
    //   };
    //   images.push(img);
    //   this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
    // } else {
    //   const images = [];
    //   const img = {
    //     src: e?.value?.documents,
    //     width: "600px",
    //     height: "400px",
    //     alt: "ng-zorro",
    //   };
    //   images.push(img);
    //   this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
    // }
    const images = [];
    if(action == 'documents'){
      if (e?.value?.documents?.uid) {
        let doc = await getBase64(e?.value?.documents);
        const img = {
          src: doc,
          width: "600px",
          height: "400px",
          alt: "ng-zorro",
        };
        images.push(img);
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
      } else {
    const img = {
      src: e?.value?.documents,
      width: "600px",
      height: "400px",
      alt: "ng-zorro",
    };
    images.push(img);
    this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
  }
    } else if(action == 'documents_front'){
      if (e?.value?.documents_front?.uid) {
        let doc = await getBase64(e?.value?.documents_front);
        // const images = [];
        const img = {
          src: doc,
          width: "600px",
          height: "400px",
          alt: "ng-zorro",
        };
        images.push(img);
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
      } else {
      // const images = [];
    const img = {
      src: e?.value?.documents_front,
      width: "600px",
      height: "400px",
      alt: "ng-zorro",
    };
    images.push(img);
    this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
  }
    } else if(action == 'documents_back'){
      if (e?.value?.documents_back?.uid) {
        let doc = await getBase64(e?.value?.documents_back);
        // const images = [];
        const img = {
          src: doc,
          width: "600px",
          height: "400px",
          alt: "ng-zorro",
        };
        images.push(img);
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
      } else {
      // const images = [];
    const img = {
      src: e?.value?.documents_back,
      width: "600px",
      height: "400px",
      alt: "ng-zorro",
    };
    images.push(img);
    this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
    }
  }
  }

  createMasterProductForm(data?) {
    this.addEditProductForm = this.fb.group({
      name: [data ? data?.name : null, [Validators.required]],
      address_line_1: [
        data ? data?.address_line_1 : null,
        [Validators.required],
      ],
      address_line_2: [
        data ? data?.address_line_2 : null,
        [Validators.required],
      ],
      city: [data ? data?.city : null, [Validators.required]],
      state: [data ? data?.state?.id : null, [Validators.required]],
      salary_date: [data ? data?.salary_date : null],
      due_date: [data ? data?.due_date : null],
      bill_date: [data ? data?.bill_date : null],
      corporation_category: [
        data ? data?.corporation_category?.id : null,
        [Validators.required],
      ],
      pincode: [
        data ? data?.pincode : null,
        [Validators.required, Validators.pattern("^[1-9][0-9]{5}$")],
      ],
      phone: [
        data ? data?.phone : null,
        [Validators.required, Validators.pattern("([0-9]{8}|[0-9]{10})")],
      ],
      // ^.{1,10}$
      // unique_code: [data ? data?.unique_code : null],

      bank_name: [data ? data?.bank_name : ""],
      account_no: [data ? data?.account_no : ""],
      ifsc: [
        data ? data?.ifsc : "",
        [Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")],
      ],
      branch: [data ? data?.branch : ""],

      display_name: [data ? data?.display_name : null, [Validators.required]],
      contact_person_name: [
        data ? data?.contact_person_name : null,
        [Validators.required],
      ],
      contact_person_phone: [
        data ? data?.contact_person_phone : null,
        [Validators.required, Validators.pattern("([0-9]{8}|[0-9]{10})")],
      ],
      contact_person_email: [
        data ? data?.contact_person_email : null,
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$")
          // ^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$
          // ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-90-9._%+-]+\.[a-zA-Z0-9-.]+$
        ],
      ],

      // employee: [data ? data?.employee : null, [Validators.required]],
      payout: [data ? data?.payout : null, [Validators.required]],
      document_data: this.fb.array([]),
      corporate_limit_settings: {},
      nach_date_time_mappings: this.fb.array([]),
      // documents: [null, [Validators.required]],
      // if m creating master always share the value 1
      master: ["0", [Validators.required]],
      partner_nature: ["Partner", [Validators.required]],
      partner_master: [data ? data?.master_partner?.id : null],
      flag:[data ? data?.corporate_limit_settings?.flag : 'Card', [Validators.required]],
      relationship_manager_name:[data ? data?.relationship_manager_name : null, [Validators.required]],
      relationship_manager_contact:[data ? data?.relationship_manager_contact : null, [Validators.required, , Validators.pattern("^[1-9][0-9]{9}$")]],
      relationship_manager_email:[data ? data?.relationship_manager_email : null, [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$"),]],
      max_salary_percent: [data ? data?.corporate_limit_settings?.max_salary_percent : null],
      ewa_percent: [data ? data?.corporate_limit_settings?.ewa_percent : null],
      permanent_min:[data ? data?.corporate_limit_settings?.permanent_min : null],
      permanent_max:[data ? data?.corporate_limit_settings?.permanent_max : null],
      contractual_min:[data ? data?.corporate_limit_settings?.contractual_min : null],
      contractual_max:[data ? data?.corporate_limit_settings?.contractual_max : null],
      permanent_agreed:[data ? data?.corporate_limit_settings?.permanent_agreed : null],
      contractual_agreed:[data ? data?.corporate_limit_settings?.contractual_agreed : null],
    });
    if (data) {
      this.setFormData(data);
    }
  }

  removeQuantity(i: number) {
    // this.quantities().removeAt(i);
  }

  onClickOpenPopUp(e) {
    if (e?.pointerType == "mouse") {
      this.isVisible = true;
    }
  }

  omit_special_char(event) {
    // to avoid special Character
    // var k;
    // k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    // return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));

    // to avoid special Character && Number
    var charCode = event.keyCode;
    if (
      (charCode > 64 && charCode < 91) ||
      (charCode > 96 && charCode < 123) ||
      charCode == 32 ||
      charCode == 8
    )
      return true;
    else return false;
  }

  deleteDocumentByDocumentId(i) {
    let fileName = this.addEditProductForm.get("document_data") as FormArray;
    const master = fileName.controls?.[i].value?.document_master;
    const selectedFile = fileName.controls?.[i].value;
    if (!fileName.controls?.[i].value?.id) {
      const document = {
        name: selectedFile?.label_name,
        pk: selectedFile?.document_master,
        front_back_flag: selectedFile?.front_back_flag,
        display_name: null,
        display_name_front:  selectedFile?.name + " Front",
        display_name_back: selectedFile?.name + " Back",
        isdelete: false,
      };
      if (document?.pk == 3) {
        this.documentArray.push(document);
      }
      this.message.success(
        fileName.controls?.[i].value?.label_name + " Document Deleted"
      );
      fileName.removeAt(i);
      this.selectedDocument = null;
    } else {
      this.http
        .deletePartnerDocumentByDocumentId(selectedFile?.id)
        .subscribe((res) => {
          const document = {
            name: selectedFile?.label_name,
            pk: selectedFile?.document_master,
            front_back_flag: selectedFile?.front_back_flag
          };
          if (document?.pk == 3) {
            this.documentArray.push(document);
          }
          this.message.success(
            fileName.controls?.[i].value?.label_name + " Document Deleted"
          );
          fileName.removeAt(i);
          this.selectedDocument = null;
        });
    }
  }

  listOfDocumentWithFlag: any = [];
  getListOfDocumentRequired() {
    this.http.getListOfDocumentRequired().subscribe((res: any) => {
      const data = res?.data?.results;
      data.map((res) => {
        if (res?.pk == 7 || res?.pk == 3) {
          let otherDoc = {
            pk: res?.pk,
            name: res?.name,
            front_back_flag: res?.front_back_flag,
          };
          this.documentArray.push(otherDoc);
        }
      });
    });
  }
  
  documentFlagArray = [];
  addRule() {
    // if (this.documentArray.includes(this.selectedDocument)) {
    //   const index = this.documentArray.indexOf(this.selectedDocument);
    //   this.documentArray.splice(index, 1);
    // }
    // this.addSkills(this.selectedDocument);
    // this.isVisible = false;
    if (this.selectedDocument?.pk == 3) {
      this.documentFlagArray.push(this.selectedDocument);
    }
    const storeSelectedData = this.selectedDocument
    if(this.selectedDocument?.front_back_flag){
      let data
      data = {
        front_back_flag: storeSelectedData?.front_back_flag,
        name: storeSelectedData?.name,
        display_name: null,
        isdelete: false,
        display_name_front:  storeSelectedData?.name + " Front",
        display_name_back: storeSelectedData?.name + " Back",
        pk: storeSelectedData?.pk
      }
      this.addSkills(data);
      // data = {
      //   front_back_flag: storeSelectedData?.front_back_flag,
      //   name: storeSelectedData?.name,
      //   display_name: storeSelectedData?.name + " Back",
      //   isdelete: true,
      //   pk: storeSelectedData?.pk
      // }
      // this.addSkills(data);
    } else {
      let data;
      data = {
        front_back_flag: storeSelectedData?.front_back_flag,
        name: storeSelectedData?.name,
        display_name: storeSelectedData?.name,
        display_name_front: null,
        display_name_back: null,
        isdelete: false,
        pk: storeSelectedData?.pk
      }
      this.addSkills(data); 
    }
    this.isVisible = false;
  }

  get skills(): FormArray {
    return this.addEditProductForm.get("document_data") as FormArray;
  }

  get nach(): FormArray {
    return this.addEditProductForm.get("nach_date_time_mappings") as FormArray;
  }

  newSkill(data?): FormGroup {
    // this.selectedDocument = null;
    // return this.fb.group({
    //   id: [data ? data?.id : null],
    //   document_master: [data?.pk],
    //   label_name: [data?.name],
    //   documents: [data?.documents],
    //   document_name: [data?.document_name ? data?.document_name : ""],
    //   is_verified: [data?.is_verified ? data?.is_verified : false],
    // });
    this.selectedDocument = null;
    return this.fb.group({
      id: [data ? data?.id : null],
      front_back_flag: [data ? data?.front_back_flag : null],
      document_master: [data?.pk],
      display_name_front:[data?.display_name_front],
      display_name_back:[data?.display_name_back],
      display_name:[data?.display_name],
      isdelete: data?.isdelete ? data?.isdelete : false,
      label_name: [data?.name],
      documents: [data?.documents],
      documents_front:[data?.documents_front],
      documents_back:[data?.documents_back],
      document_name: [data?.document_name],
      document_name_front: [data?.document_name_front],
      document_name_back: [data?.document_name_front],
      is_verified: [data?.is_verified ? data?.is_verified : false],
    });
  }
  
  selectedDate: any;
  get_underwritingArr(form) {
    return form.controls.document_data.controls;
  }

  indexOfLatestNach: any;
  get_nachArr(form) {
    this.indexOfLatestNach =
      form.controls.nach_date_time_mappings.controls?.length;
    // console.log(form.controls.nach_date_time_mappings.controls[this.indexOfLatestNach - 1]?.controls?.value);
    return form.controls.nach_date_time_mappings.controls;
  }

  onChange(result: string): void {
    console.log("Selected Time: ", result);
  }

  onOk(i, time: Date | null) {
    // const momentTime = moment(time).format("HH:mm:ss");
    // console.log(result && result.toTimeString());
    // console.log(time && time.toTimeString());
    // let attribute = this.addEditProductForm.get(
    //   "nach_date_time_mappings"
    // ) as FormArray;
    // attribute.controls?.[i].patchValue({ time_of_day: momentTime });
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  onUpload(e, i, action) {
    // if (action == "upload") {
    //   let fileName = this.addEditProductForm.get("document_data") as FormArray;
    //   fileName.controls?.[i].patchValue({ document_name: e?.file?.name });
    //   let value = this.addEditProductForm.get("document_data") as FormArray;
    //   value.controls?.[i].patchValue({ documents: e?.file?.originFileObj });
    // }
    let fileName = this.addEditProductForm.get("document_data") as FormArray;
    let value = this.addEditProductForm.get("document_data") as FormArray;
    if(action=='name'){
      fileName.controls?.[i].patchValue({ document_name: e?.file?.name });
      value.controls?.[i].patchValue({ documents: e?.file?.originFileObj });
    } else if(action == 'name_front'){
      fileName.controls?.[i].patchValue({ document_name_front: e?.file?.name });
      value.controls?.[i].patchValue({ documents_front: e?.file?.originFileObj });
    } else if(action == 'name_back'){
      fileName.controls?.[i].patchValue({ document_name_back: e?.file?.name });
      value.controls?.[i].patchValue({ documents_back: e?.file?.originFileObj });
    }
  }

  addSkills(data?) {
    this.skills.push(this.newSkill(data));
  }

  addNach(data?) {
    this.nach.push(this.newNach(data));
  }

  newNach(data?): FormGroup {
    console.log(data);
    // const datePipe = new DatePipe('en-US');
    return this.fb.group({
      day_of_month: [data ? data?.day_of_month : null],
      time_of_day: [data ? data?.time_of_day : null],
    });
    // moment(data?.time_of_day).format('yyyy-mm ,HH:mm:ss')
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  deleteNachByKey(i) {
    this.nach.removeAt(i);
  }

  // this method is used to add new after submitting existing one
  onClickSaveExistingForm() {
    let corporate_limit_settings;
    const storeData = this.addEditProductForm.value;
    if(this.addEditProductForm.value.flag === 'Card'){
      corporate_limit_settings = {
        flag: this.addEditProductForm.value?.flag,
        max_salary_percent: this.addEditProductForm.value?.max_salary_percent ? this.addEditProductForm.value?.max_salary_percent : null,
        permanent_min: this.addEditProductForm.value?.permanent_min ? this.addEditProductForm.value?.permanent_min : null, 
        permanent_max: this.addEditProductForm.value?.permanent_max ? this.addEditProductForm.value?.permanent_max : null,
        contractual_min: this.addEditProductForm.value?.contractual_min ? this.addEditProductForm.value?.contractual_min : null,
        contractual_max: this.addEditProductForm.value?.contractual_max ? this.addEditProductForm.value?.contractual_max : null,
        permanent_agreed: this.addEditProductForm.value?.permanent_agreed ? this.addEditProductForm.value?.permanent_agreed : null,
        contractual_agreed: this.addEditProductForm.value?.contractual_agreed ? this.addEditProductForm.value?.contractual_agreed : null
      }
      this.addEditProductForm.patchValue({
        corporate_limit_settings: JSON.stringify(corporate_limit_settings)
      })
    } else {
      corporate_limit_settings = {
        flag: this.addEditProductForm.value?.flag,
        ewa_percent: this.addEditProductForm.value?.ewa_percent ? this.addEditProductForm.value?.ewa_percent : null,
        max_salary_percent: this.addEditProductForm.value?.max_salary_percent ? this.addEditProductForm.value?.max_salary_percent : null,
      }
      this.addEditProductForm.patchValue({
        corporate_limit_settings: JSON.stringify(corporate_limit_settings)
      })
    }
    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[i].markAsDirty();
      this.addEditProductForm.controls[i].updateValueAndValidity();
    }
    if (!this.addEditProductForm.valid) {
      this.message.error("Mandatory Fields Are missing ", { nzDuration: 5000 });
    }
    const saveDoc = [];
    var sendDate = this.addEditProductForm.value;
        delete this.addEditProductForm.value?.permanent_min;
        delete this.addEditProductForm.value?.permanent_max;
        delete this.addEditProductForm.value?.contractual_min;
        delete this.addEditProductForm.value?.contractual_max;
        delete this.addEditProductForm.value?.permanent_agreed;
        delete this.addEditProductForm.value?.contractual_agreed;
        delete this.addEditProductForm.value?.flag;
        delete this.addEditProductForm.value?.ewa_percent;  
        delete this.addEditProductForm.value?.max_salary_percent;  
    for (var i in sendDate.nach_date_time_mappings) {
      if(sendDate.nach_date_time_mappings.length == 0){
        sendDate.nach_date_time_mappings = null;
      } else {
      if (
        sendDate.nach_date_time_mappings[i].time_of_day &&
        sendDate.nach_date_time_mappings[i].day_of_month
      ) {
        sendDate.nach_date_time_mappings[i].time_of_day = moment(
          sendDate.nach_date_time_mappings[i]?.time_of_day
        ).format("HH:mm:ss");
      } else {
        delete sendDate.nach_date_time_mappings[i];
        this.deleteNachByKey(i);
      }
    }
    }

    for (var i in sendDate.document_data) {
      if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
        this.message.error(
          " Plz Upload Selected Document " +
            ` ${sendDate.document_data[i].label_name}`,{ nzDuration: 5000 }
        );
        return;
      } 
      if (!sendDate.document_data[i].front_back_flag && 
        !sendDate.document_data[i].document_name){
          this.message.error(
            " Plz Upload Selected Document " +
              ` ${sendDate.document_data[i].label_name}`,{ nzDuration: 5000 }
          );
          return;
      }
    }

    if (this.addEditProductForm.valid) {
      this.apiLoader["saveAddNew"] = true;
      let data = new FormData();

        var sendDate = this.addEditProductForm.value;

        for (var i in sendDate.document_data) {
          if (!sendDate.document_data[i].id) {
            delete sendDate?.document_data[i]?.id;
          }
          if (sendDate?.document_data[i]?.front_back_flag) {
            if(sendDate?.document_data[i]?.document_name_front) {
              // saveDoc.push(sendDate?.document_data[i]?.documents_front)
              data.append("documents", sendDate?.document_data[i]?.documents_front);
              delete sendDate?.document_data[i]?.documents_front;
            }
            if(sendDate?.document_data[i]?.document_name_back) {
              data.append("documents", sendDate?.document_data[i]?.documents_back);
              delete sendDate?.document_data[i]?.documents_back;
            }
          } 
          if(!sendDate?.document_data[i]?.front_back_flag) {
            saveDoc.push(sendDate?.document_data[i]?.documents)
            data.append("documents", sendDate?.document_data[i]?.documents);
            delete sendDate?.document_data[i]?.documents;
             }
        }
        for (var i in sendDate) {
          if (i == "document_data" || i == "nach_date_time_mappings") {
            data.append(i, JSON.stringify(sendDate[i]));
          } else {
            if (sendDate[i]) {
              delete sendDate?.flag;
              data.append(i, sendDate[i]);
            }
          }
          // data.append('corporate_limit_settings', JSON.stringify(corporate_limit_settings));
        }
        const url = this.http.createPartnerForm(data);
        url.subscribe(
          (res: any) => {
            if (res.success) {
                this.apiLoader["saveAddNew"] = false;
                this.message.success(res?.message);
                let newRouterLink = "/partners/add";
                this.router.navigate(["/"]).then(() => {
                this.router.navigate([newRouterLink]);
              });
            } else {
              const control = <FormArray>(
                this.addEditProductForm.controls["nach_date_time_mappings"]
              );
              for (let i = control.length - 1; i >= 0; i--) {
                control.removeAt(i);
              }
              for (var i in saveDoc) {
              let value = this.addEditProductForm.get("document_data") as FormArray;
              value.controls?.[i].patchValue({ documents: saveDoc[i] });
              }
              // this.setFormData(storeData);
              this.setFormDataForNach(storeData);
              this.message.error(res?.message);
              this.apiLoader["saveAddNew"] = false;
            }
          },
          error => {
            const control = <FormArray>(
              this.addEditProductForm.controls["nach_date_time_mappings"]
            );
            for (let i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }
            // this.message.error(res?.message);
            for (var i in saveDoc) {
              let value = this.addEditProductForm.get("document_data") as FormArray;
              value.controls?.[i].patchValue({ documents: saveDoc[i] });
              }
              this.setFormDataForNach(storeData);
            this.apiLoader["formSave"] = false;
          }
        );
    }
    // console.log(this.addEditProductForm.value);
    // let corporate_limit_settings;
    // const storeData = this.addEditProductForm.valid;
    // const saveDoc = [];
    // if(this.addEditProductForm.value.flag === 'Card'){
    //   corporate_limit_settings = {
    //     flag: this.addEditProductForm.value?.flag,
    //     max_salary_percent: this.addEditProductForm.value?.max_salary_percent ? this.addEditProductForm.value?.max_salary_percent : null,
    //     permanent_min: this.addEditProductForm.value?.permanent_min ? this.addEditProductForm.value?.permanent_min : null, 
    //     permanent_max: this.addEditProductForm.value?.permanent_max ? this.addEditProductForm.value?.permanent_max : null,
    //     contractual_min: this.addEditProductForm.value?.contractual_min ? this.addEditProductForm.value?.contractual_min : null,
    //     contractual_max: this.addEditProductForm.value?.contractual_max ? this.addEditProductForm.value?.contractual_max : null,
    //     permanent_agreed: this.addEditProductForm.value?.permanent_agreed ? this.addEditProductForm.value?.permanent_agreed : null,
    //     contractual_agreed: this.addEditProductForm.value?.contractual_agreed ? this.addEditProductForm.value?.contractual_agreed : null
    //   }
    //   this.addEditProductForm.patchValue({
    //     // corporate_limit_settings: corporate_limit_settings
    //     corporate_limit_settings: JSON.stringify(corporate_limit_settings)
    //   })
    // } else {
    //   corporate_limit_settings = {
    //     flag: this.addEditProductForm.value?.flag,
    //     ewa_percent: this.addEditProductForm.value?.ewa_percent ? this.addEditProductForm.value?.ewa_percent : null,
    //     max_salary_percent: this.addEditProductForm.value?.max_salary_percent ? this.addEditProductForm.value?.max_salary_percent : null,
    //   }
    //   this.addEditProductForm.patchValue({
    //     corporate_limit_settings: JSON.stringify(corporate_limit_settings)
    //   })
    // }
    // for (const i in this.addEditProductForm.controls) {
    //   this.addEditProductForm.controls[i].markAsDirty();
    //   this.addEditProductForm.controls[i].updateValueAndValidity();
    // }
    // if (!this.addEditProductForm.valid) {
    //   this.message.error("Mandatory Fields Are missing ", { nzDuration: 5000 });
    // }
    // var sendDate = this.addEditProductForm.value;
    // for (var i in sendDate.nach_date_time_mappings) {
    //   if (
    //     sendDate.nach_date_time_mappings[i].time_of_day &&
    //     sendDate.nach_date_time_mappings[i].day_of_month
    //   ) {
    //     sendDate.nach_date_time_mappings[i].time_of_day = moment(
    //       sendDate.nach_date_time_mappings[i]?.time_of_day
    //     ).format("HH:mm:ss");
    //   } else {
    //     delete sendDate.nach_date_time_mappings[i];
    //     // delete sendDate.nach_date_time_mappings[i].day_of_month
    //     this.deleteNachByKey(i);
    //   }
    // }
    // for (var i in sendDate.document_data) {
    //   if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
    //     this.message.error(
    //       " Plz Upload Selected Document " +
    //         ` ${sendDate.document_data[i].label_name}`,{ nzDuration: 5000 }
    //     );
    //     return;
    //   } 
    //   if (!sendDate.document_data[i].front_back_flag && 
    //     !sendDate.document_data[i].document_name){
    //       this.message.error(
    //         " Plz Upload Selected Document " +
    //           ` ${sendDate.document_data[i].label_name}`,
    //         { nzDuration: 5000 }
    //       );
    //       return;
    //   }
    // }
    // if (this.addEditProductForm.valid) {
    //   this.apiLoader["saveAddNew"] = true;
    //   let data = new FormData();

    //   // var sendDate = this.addEditProductForm.value;
    //   // delete this.addEditProductForm.value?.permanent_min;
    //   //   delete this.addEditProductForm.value?.permanent_max;
    //   //   delete this.addEditProductForm.value?.contractual_min;
    //   //   delete this.addEditProductForm.value?.contractual_max;
    //   //   delete this.addEditProductForm.value?.permanent_agreed;
    //   //   delete this.addEditProductForm.value?.contractual_agreed;
    //   //   delete this.addEditProductForm.value?.flag;
    //   //   delete this.addEditProductForm.value?.ewa_percent;  
    //   //   delete this.addEditProductForm.value?.max_salary_percent;  
    //   for (var i in sendDate.document_data) {
    //     if (!sendDate.document_data[i].id) {
    //       delete sendDate?.document_data[i]?.id;
    //     }
    //     if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
    //       this.message.error(
    //         " Plz Upload Selected Document " +
    //           ` ${sendDate.document_data[i].label_name}`,{ nzDuration: 5000 }
    //       );
    //       return;
    //     } 
    //     if (!sendDate.document_data[i].front_back_flag && 
    //       !sendDate.document_data[i].document_name){
    //         this.message.error(
    //           " Plz Upload Selected Document " +
    //             ` ${sendDate.document_data[i].label_name}`,
    //           { nzDuration: 5000 }
    //         );
    //         return;
    //     }
    //   }

    //   for (var i in sendDate) {
    //     if (i == "document_data" || i == "nach_date_time_mappings") {
    //       data.append(i, JSON.stringify(sendDate[i]));
    //     } else {
    //       if (sendDate[i]) {
    //         data.append(i, sendDate[i]);
    //       }
    //     }
    //   }
    //   const url = this.http.createPartnerForm(data);
    //   url.subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       if (res.success) {
    //         this.apiLoader["saveAddNew"] = false;
    //         this.message.success(res?.message);
    //         let newRouterLink = "/partners/add";
    //         this.router.navigate(["/"]).then(() => {
    //           this.router.navigate([newRouterLink]);
    //         });
    //       } else {
    //         const control = <FormArray>(
    //           this.addEditProductForm.controls["nach_date_time_mappings"]
    //         );
    //         for (let i = control.length - 1; i >= 0; i--) {
    //           control.removeAt(i);
    //         }
    //         for (var i in saveDoc) {
    //           let value = this.addEditProductForm.get("document_data") as FormArray;
    //           value.controls?.[i].patchValue({ documents: saveDoc[i] });
    //           }
    //         // this.setFormData(storeData);
    //         this.setFormDataForNach(storeData);
    //         this.apiLoader["saveAddNew"] = false;
    //         this.message.error(res?.message);
    //       }
    //     },
    //     error => {
    //       const control = <FormArray>(
    //         this.addEditProductForm.controls["nach_date_time_mappings"]
    //       );
    //       for (let i = control.length - 1; i >= 0; i--) {
    //         control.removeAt(i);
    //       }
    //       for (var i in saveDoc) {
    //         let value = this.addEditProductForm.get("document_data") as FormArray;
    //         value.controls?.[i].patchValue({ documents: saveDoc[i] });
    //         }
    //       this.apiLoader["saveAddNew"] = false;
    //     }
    //   );
    // }
  }

  // this.apiLoader["saveAddNew"] = false;
  //           this.message.success(res?.message);
  //           let newRouterLink = "/partners/add";
  //           this.router.navigate(["/"]).then(() => {
  //             this.router.navigate([newRouterLink]);

  onClickSubmitForm() {
    console.log(this.addEditProductForm.value, ' <== Value')
    let corporate_limit_settings;
    const storeData = this.addEditProductForm.value;
    if(this.addEditProductForm.value.flag === 'Card'){
      corporate_limit_settings = {
        flag: this.addEditProductForm.value?.flag,
        max_salary_percent: this.addEditProductForm.value?.max_salary_percent ? this.addEditProductForm.value?.max_salary_percent : null,
        permanent_min: this.addEditProductForm.value?.permanent_min ? this.addEditProductForm.value?.permanent_min : null, 
        permanent_max: this.addEditProductForm.value?.permanent_max ? this.addEditProductForm.value?.permanent_max : null,
        contractual_min: this.addEditProductForm.value?.contractual_min ? this.addEditProductForm.value?.contractual_min : null,
        contractual_max: this.addEditProductForm.value?.contractual_max ? this.addEditProductForm.value?.contractual_max : null,
        permanent_agreed: this.addEditProductForm.value?.permanent_agreed ? this.addEditProductForm.value?.permanent_agreed : null,
        contractual_agreed: this.addEditProductForm.value?.contractual_agreed ? this.addEditProductForm.value?.contractual_agreed : null
      }
      this.addEditProductForm.patchValue({
        corporate_limit_settings: JSON.stringify(corporate_limit_settings)
      })
    } else {
      corporate_limit_settings = {
        flag: this.addEditProductForm.value?.flag,
        ewa_percent: this.addEditProductForm.value?.ewa_percent ? this.addEditProductForm.value?.ewa_percent : null,
        max_salary_percent: this.addEditProductForm.value?.max_salary_percent ? this.addEditProductForm.value?.max_salary_percent : null,
      }
      this.addEditProductForm.patchValue({
        corporate_limit_settings: JSON.stringify(corporate_limit_settings)
      })
    }
    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[i].markAsDirty();
      this.addEditProductForm.controls[i].updateValueAndValidity();
    }
    if (!this.addEditProductForm.valid) {
      this.message.error("Mandatory Fields Are missing ", { nzDuration: 5000 });
    }
    const saveDoc = [];
    var sendDate = this.addEditProductForm.value;
        delete this.addEditProductForm.value?.permanent_min;
        delete this.addEditProductForm.value?.permanent_max;
        delete this.addEditProductForm.value?.contractual_min;
        delete this.addEditProductForm.value?.contractual_max;
        delete this.addEditProductForm.value?.permanent_agreed;
        delete this.addEditProductForm.value?.contractual_agreed;
        delete this.addEditProductForm.value?.flag;
        delete this.addEditProductForm.value?.ewa_percent;  
        delete this.addEditProductForm.value?.max_salary_percent;  
    for (var i in sendDate.nach_date_time_mappings) {
      if(sendDate.nach_date_time_mappings.length == 0){
        sendDate.nach_date_time_mappings = null;
      } else {
      if (
        sendDate.nach_date_time_mappings[i].time_of_day &&
        sendDate.nach_date_time_mappings[i].day_of_month
      ) {
        sendDate.nach_date_time_mappings[i].time_of_day = moment(
          sendDate.nach_date_time_mappings[i]?.time_of_day
        ).format("HH:mm:ss");
      } else {
        delete sendDate.nach_date_time_mappings[i];
        this.deleteNachByKey(i);
      }
    }
    }

    for (var i in sendDate.document_data) {
      if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
        this.message.error(
          " Plz Upload Selected Document " +
            ` ${sendDate.document_data[i].label_name}`,{ nzDuration: 5000 }
        );
        return;
      } 
      if (!sendDate.document_data[i].front_back_flag && 
        !sendDate.document_data[i].document_name){
          this.message.error(
            " Plz Upload Selected Document " +
              ` ${sendDate.document_data[i].label_name}`,{ nzDuration: 5000 }
          );
          return;
      }
    }

    if (this.addEditProductForm.valid) {
      this.apiLoader["formSave"] = true;
      if (!this.isEdit) {
        let data = new FormData();

        var sendDate = this.addEditProductForm.value;

        for (var i in sendDate.document_data) {
          if (!sendDate.document_data[i].id) {
            delete sendDate?.document_data[i]?.id;
          }
          if (sendDate?.document_data[i]?.front_back_flag) {
            if(sendDate?.document_data[i]?.document_name_front) {
              // saveDoc.push(sendDate?.document_data[i]?.documents_front)
              data.append("documents", sendDate?.document_data[i]?.documents_front);
              delete sendDate?.document_data[i]?.documents_front;
            }
            if(sendDate?.document_data[i]?.document_name_back) {
              data.append("documents", sendDate?.document_data[i]?.documents_back);
              delete sendDate?.document_data[i]?.documents_back;
            }
          } 
          if(!sendDate?.document_data[i]?.front_back_flag) {
            saveDoc.push(sendDate?.document_data[i]?.documents)
            data.append("documents", sendDate?.document_data[i]?.documents);
            delete sendDate?.document_data[i]?.documents;
             }
        }
        for (var i in sendDate) {
          if (i == "document_data" || i == "nach_date_time_mappings") {
            data.append(i, JSON.stringify(sendDate[i]));
          } else {
            if (sendDate[i]) {
              delete sendDate?.flag;
              data.append(i, sendDate[i]);
            }
          }
          // data.append('corporate_limit_settings', JSON.stringify(corporate_limit_settings));
        }
        const url = this.http.createPartnerForm(data);
        url.subscribe(
          (res: any) => {
            if (res.success) {
              this.message.success(res?.message);
              this.apiLoader["formSave"] = false;
              this.router.navigate(["partners"]);
            } else {
              const control = <FormArray>(
                this.addEditProductForm.controls["nach_date_time_mappings"]
              );
              for (let i = control.length - 1; i >= 0; i--) {
                control.removeAt(i);
              }
              for (var i in saveDoc) {
              let value = this.addEditProductForm.get("document_data") as FormArray;
              value.controls?.[i].patchValue({ documents: saveDoc[i] });
              }
              console.log(saveDoc)
              console.log(storeData)
              // this.setFormData(storeData);
              this.setFormDataForNach(storeData);
              this.message.error(res?.message);
              this.apiLoader["formSave"] = false;
            }
          },
          error => {
            const control = <FormArray>(
              this.addEditProductForm.controls["nach_date_time_mappings"]
            );
            for (let i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }
            for (var i in saveDoc) {
              let value = this.addEditProductForm.get("document_data") as FormArray;
              value.controls?.[i].patchValue({ documents: saveDoc[i] });
              }
            this.apiLoader["formSave"] = false;
          }
        );
      } 
      else {
        let data = new FormData();
        console.log(this.addEditProductForm.value);
        var sendDate = this.addEditProductForm.value;
            delete this.addEditProductForm.value?.permanent_min;
            delete this.addEditProductForm.value?.permanent_max;
            delete this.addEditProductForm.value?.contractual_min;
            delete this.addEditProductForm.value?.contractual_max;
            delete this.addEditProductForm.value?.permanent_agreed;
            delete this.addEditProductForm.value?.contractual_agreed;
            delete this.addEditProductForm.value?.flag;
            delete this.addEditProductForm.value?.ewa_percent;  
            delete this.addEditProductForm.value?.max_salary_percent
        for (var i in sendDate.document_data) {
          if (!sendDate.unique_code) {
            delete sendDate?.unique_code;
          }
          if (!sendDate.document_data[i].id) {
            delete sendDate?.document_data[i]?.id;
          }
          if (sendDate?.document_data[i]?.front_back_flag) {
            if(sendDate?.document_data[i]?.documents_front?.["uid"]) {
              data.append("documents", sendDate?.document_data[i]?.documents_front);
              delete sendDate?.document_data[i]?.documents_front;
            } else {
              delete sendDate?.document_data[i]?.documents_front;
            }
            if(sendDate?.document_data[i]?.documents_back?.["uid"]) {
              data.append("documents", sendDate?.document_data[i]?.documents_back);
              delete sendDate?.document_data[i]?.documents_back;
            } else {
              delete sendDate?.document_data[i]?.documents_back;
            }
          } 
          if(!sendDate?.document_data[i]?.front_back_flag) {
            if(sendDate?.document_data[i]?.documents?.["uid"]) {
              data.append("documents", sendDate?.document_data[i]?.documents);
              delete sendDate?.document_data[i]?.documents;
            } else {
                  delete sendDate?.document_data[i]?.documents;
              }
          }
        }
        for (var i in sendDate) {
          if (i == "document_data" || i == "nach_date_time_mappings" ) {
            data.append(i, JSON.stringify(sendDate[i]));
          } else {
            if (sendDate[i]) {
              data.append(i, sendDate[i]);
            }
          }
        }
        const url = this.http.updateMasterPartnerForm(this.partnerId, data);
        url.subscribe(
          (res: any) => {
            if (res.success) {
              this.message.success(res?.message);
              this.apiLoader["formSave"] = false;
              this.router.navigate(["partners"]);
            } else {
              this.message.error(res?.message);
              this.apiLoader["formSave"] = false;
            }
          },
          (err) => {
            this.apiLoader["formSave"] = false;
          }
        );
      }
    }
  }

  handleChange(e, index) {
    console.log(index, "index");
    this.index = index;
    this.addEditProductForm
      .get("document_data")
      ["controls"][index].controls.documents.setValue(e.file.originFileObj);
  }

  customUpload = (file: NzUploadFile): boolean => {
    const data = [];
    return false;
  };
}
