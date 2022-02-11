import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  selectedTab: any;
  selectedId: any;
  searchValue = '';
  listOfNewJoinees = [
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
  ];

  listOfEmployee = [
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
  ];

  apiLoader = {
    'list': false,
  }
  page = 1;

  total_count = 10;
  UPIList: any;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // if (params['id'] && params['depo']) {
        if(params['id']){
          this.selectedId = params['id'];
        }
        if(params['targetCategory']){
          this.selectedTab = params['targetCategory'];
        }else {
          this.selectedTab = 'new-joinees';
        }
      // }else if(params['tabCategory']) {
      //   this.employeeTabs = params['tabCategory']
      // }
    }) 
    this.getNewJoineeList();
  }

  onClickChangeTab(e){
    this.selectedTab = e;
    this.router.navigate(['/employeeDetail'], { queryParams: { id: this.selectedId, targetCategory: this.selectedTab } });
  }

  getResultBasedOnSearch(){
    this.page = 1;
    // this.getAuthorizationList();
  }

  resetFilter(){
    this.page =1;
    this.searchValue =''
    // this.getAuthorizationList();
  }

  getNewJoineeList(e?){
    this.listOfNewJoinees;
    this.listOfEmployee;
    // let data;
    // if(action == 'inactive'){
    //   data = {
    //     "source" : "LMS",
    //     "datapoint" : "authorization_edit",
    //     "endpoint" : `Upi/${id}` ,
    //     "status" : false
    //   } 

    // } else if (action == 'active'){
    //   data = {
    //     "source" : "LMS",
    //     "datapoint" : "authorization_edit",
    //     "endpoint" : `Upi/${id}` ,
    //     "status" : true
    //   } 
    // }
    // this.http.getLMSAuthorizationList(data).subscribe((res)=> {
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // })

  }

  // getAuthorizationList(e?){
    // this.listOfData;
    // if(this.apiLoader['list']){return}
    // this.apiLoader['list'] = true;
    // let data = {
    //   'source': 'LMS',
    //   'datapoint':'authorization_get',
    //   'endpoint':'Upi',
    //   'keyword': this.searchValue,
    //   'page': 1,
    //   'size': 30
    // }
    // // this.listOfData;
    // this.http.getLMSAuthorizationList(data).subscribe((res)=> {
    //   this.UPIList = res?.data?.results;
    //   this.total_count = res?.data?.total_count;
    //   this.apiLoader['list'] = false;
    //   console.log(this.UPIList, 'this.UPIList');
    // }, err => {
    //   console.log(err);
    //   this.apiLoader['list'] = false;
    // })

  // }
  
}
