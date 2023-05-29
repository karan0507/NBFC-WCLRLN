import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';
import { saveAs } from "file-saver";
import { DomSanitizer } from '@angular/platform-browser';
import { differenceInCalendarDays } from "date-fns";
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  searchValue:any;
  search_params:any;
  total_count:any;
  date:any;
  page = 1;
  today = new Date();
  globalPageSize = this.global.globalPageSize;
  api_calling_loader: boolean;
  selectedTabFilter: any = 'all';
  partner:any;
  pdfData: any;
  pdf_viewer_object_values = {
    'boolean': false,
    'url': null,
    'title': ''
  }

  insuranceData:any;
  // [
  // {
  //   id:101,
  //   user_name:'Abhishek Pawar',
  //   mobile:'9167937459',
  //   dob:'1998-06-01',
  //   amount:'10000',
  //   current_step:'Pan',
  //   aadhar : "",
	// 	pan : "",
	// 	address : "",
	// 	email : "",
	// 	unique_code : "541236",
	// 	pdf : " ture",
  //   company_name : "FatakPay",
  //   nature : "B2B",
  //   employment_type : "Salaried",
  //   created_at : "25/02/2015"
  // },
  // {
  //   id:102,
  //   user_name:'Snehal Torne',
  //   mobile:'9167977459',
  //   dob:'1995-10-05',
  //   amount:'50000',
  //   current_step:'Pan',
  //   aadhar : "",
	// 	pan : "",
	// 	address : "",
	// 	email : "",
	// 	unique_code : "748236",
	// 	pdf : " ture",
  //   company_name : "FatakPay",
  //   nature : "D2C",
  //   employment_type : "Salaried",
  //   created_at : "25/02/2015"
  // },
  // {
  //   id:103,
  //   user_name:'Sanjay Singh',
  //   mobile:'9167937459',
  //   dob:'1998-06-01',
  //   amount:'70000',
  //   current_step:'Pan',
  //   aadhar : "",
	// 	pan : "",
	// 	address : "",
	// 	email : "",
	// 	unique_code : "941236",
	// 	pdf : " ture",
  //   company_name : "FatakPay",
  //   nature : "B2B",
  //   employment_type : "Salaried",
  //   created_at : "27/11/2017"
  // }

  // ]
  partnerList: any;
  constructor( public global: GlobalservicesService, public http: HttpService, private message: NzMessageService, public sanitize: DomSanitizer,) { }

  ngOnInit(): void {
    this.getInsuranceUserData();  
  }
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
};

  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) > 0;
};
  onClickChangeTabFilter(event?){

  }
  resetFilters(){

  }

  fetchEmployeeList(event?){

  }
  getUsersData(){

  }

  viewPDF(){

  }
  onFocusMethod(type) {  
    if(type == 'partner'){
          this.http.fetchPartner().subscribe((res:any)=>{
                this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
          })
    }
  }

  downloadFile(data){
    saveAs(data, "EMPLOYEE_DETAIL.xlsx");
  }



  sanatizeUrlToSafe(value) {
    this.pdf_viewer_object_values['url'] = this.sanitize.bypassSecurityTrustResourceUrl(value);
  }

  getInsuranceUserData(){
    let data;
    this.api_calling_loader = true;
    this.http.getInsuranceList(data).subscribe(res=>{
    this.insuranceData=res['data']['results'];
    this.total_count = res?.['data'].total_count;    
      this.api_calling_loader = false;    
    })
  }


  handleCancel() {
    this.pdf_viewer_object_values['boolean'] = false
  }
  pdfViewerAndDownload(pdf) {
    console.log('hello');
    // const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
    // let data;
    //   this.http.getInsuranceList(data).subscribe(res => {
    //       let insurancepdf=res?.['data']['results'];         
    //        insurancepdf.forEach(element => {
           if(pdf!=null){
            this.sanatizeUrlToSafe(pdf);
            this.pdf_viewer_object_values['boolean'] = true
          }else{
            this.pdf_viewer_object_values['boolean'] = false
          }
         
          // });        
          // this.message.remove(generateloader);

      // }, (err) => {
      //   this.message.remove(generateloader);
     
      // });
    
  }
}
