import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import * as Chart from 'chart.js';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    themeColors = this.colorConfig.get().colors;
    // gray
    gray = this.themeColors.limeLight;
    blue = this.themeColors.blue;
    blueLight = this.themeColors.blueLight;
    pink = this.themeColors.pink;
    cyan = this.themeColors.cyan;
    cyanLight = this.themeColors.cyanLight;
    gold = this.themeColors.gold;
    purple = this.themeColors.purple;
    purpleLight = this.themeColors.purpleLight;
    red = this.themeColors.red;
    customersChartData: number[] = [350, 450, 100, 243];
    corporateChartData: number[] = [350, 450, 100, 243];
    mandateChartData: number[] = [350, 450, 100, 243];
    dummyData: number[] = [1];
    dummyDataLabels: string[] = ['No Data To Show'];
    dummyDataColors: Array<any> =  [{ 
        backgroundColor: [this.gray],
        pointBackgroundColor : [this.gray]
    }];
    customersChartLabels: string[] = ['Registered Through App', 'Total Registered Users', 'Total Corporate Users', 'Active User'];
    corporateChartLabels: string[] = ['Fixed product Count', 'EWA count'];
    mandateChartLabels: string[] = ['Aadhar Mandate', 'Debit Card Mandate', 'Net Banking Mandate', 'Upi Mandate'];
    customersChartType = 'doughnut';
    customersChartColors: Array<any> =  [{ 
        backgroundColor: [this.pink, this.purple, this.gold,this.cyan],
        pointBackgroundColor : [this.pink, this.purple, this.gold,this.cyan]
    }];
    mandateChartColors: Array<any> =  [{ 
        backgroundColor: [this.cyan, this.purple, this.gold, this.pink, this.blue],
        pointBackgroundColor : [this.cyan, this.purple, this.gold, this.pink, this.blue]
    }];
    customersChartOptions: any = {
        cutoutPercentage: 75,
        maintainAspectRatio: false
    }

    revenueChartFormat: string = 'revenueMonth';

    revenueChartData: Array<any> = [{ 
        data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
        label: 'Series A' 
    }];
    currentrevenueChartLabelsIdx = 1;
    revenueChartLabels:Array<any> = ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"];
    revenueChartOptions: any = {
        maintainAspectRatio: false,
        responsive: true,
        hover: {
            mode: 'nearest',
            intersect: true
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            xAxes: [{ 
                gridLines: [{
                    display: false,
                }],
                ticks: {
                    display: false,
                    fontColor: this.themeColors.grayLight,
                    fontSize: 13,
                    padding: 10
                }
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    drawTicks: false,
                    borderDash: [3, 4],
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 4]  
                },
                ticks: {
                    display: false,
                    max: 100,                            
                    stepSize: 100,
                    fontColor: this.themeColors.grayLight,
                    fontSize: 13,
                    padding: 10
                }  
            }],
        }
    };
    revenueChartColors: Array<any> = [
        { 
            backgroundColor: this.themeColors.transparent,
            borderColor: this.blue,
            pointBackgroundColor: this.blue,
            pointBorderColor: this.themeColors.white,
            pointHoverBackgroundColor: this.blueLight,
            pointHoverBorderColor: this.blueLight
        }
    ];
    revenueChartType = 'line';

    avgProfitChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                },
                gridLines: false,
                ticks: {
                    display: true,
                    beginAtZero: true,
                    fontSize: 13,
                    padding: 10
                }
            }],
            yAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                },
                gridLines: {
                    drawBorder: true,
                    offsetGridLines: true,
                    drawTicks: true,
                    borderDash: [3, 4],
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 4]
                },
                ticks: {                           
                    stepSize: 0,
                    display: true,
                    beginAtZero: true,
                    fontSize: 13,
                    padding: 4,
                    callback: function (value, index, values) {
                        // return value + ' Lacs';
                        var val: any;
                        val = Math.abs(value);
                        if (val >= 10000000) {
                          val = (val / 10000000).toFixed(2) + " Cr";
                        } else if (val >= 100000) {
                          val = (val / 100000).toFixed(2) + " Lacs";
                        }
                        return val;
                      },
                }
            }]
        }
    };
    avgProfitChartLabels: string[] = ['Total Commitments', 'Line Assigned', 'Fund Transfer to Escrow', 'Total O/S Balance to NBFC', 'Fund Available in Escrow', 'Unutilized Credit Line'];
    // avgProfitChartLabels: string[] = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    avgProfitChartType = 'bar';
    avgProfitChartLegend = false;
    avgProfitChartColors: Array<any> = [
        { 
            backgroundColor: '#55268E',
            borderWidth: 10
        }
    ];
    avgProfitChartData : any[] = [
        { 
            data: [3200, 2100, 2507, 8008, 9543, 5044],
            type: "bar",
            categoryPercentage: 0.3,
            barPercentage: 0.5,
        }
    ];
    selectedTab ={
        'delinquent': 'This Month',
        'nbfc': 'Today',
        'authorization': 'Today',
        'existing': 'today',
        'acquisition': 'today',
        'mandate': 'today',
        'corporate': 'this month',
        'repayment': 'this month',
    } 
    fetchedList ={
        'delinquent': '',
        'nbfc': null,
        'authorization': null,
        'acquisition': null,
        'existing': null,
        'mandate': null
    } 
    isLoading ={
        'delinquent': false,
        'nbfc': false,
        'authorization': false,
        'acquisition': false,
        'existing': false,
        'mandate': false,
        'repayment': false,
        'corporate': false
    } 
    thirty_day_user_activity: any;
    avgProfitChartDataCustomArray: any;
    nbfcGraphValue: any[];
    constructor( private colorConfig:ThemeConstantService, public router: Router, private http: HttpService) { }

    ngOnInit(): void {
    if (!localStorage.getItem('fatakpay_user_data')) {
            return;
    }
    // let data = {
    //     // 'datapoint': 'dashboard_acquisition',
    //     // 'source': 'LMS',
    //         // 'time_filter': 'overall'
    //     'time_filter': this.selectedTab['mandate']
    // }
    // this.http.getDetailForDashboardMandate(data).subscribe((res?: any)=> {
    //     console.log(res)
    // })
    this.getMandateData();
    this.getAuthorizationList();
    this.getNBFCList();    
    this.getDelinquentList();   
    this.getExistingList();
    this.getCorporateList();
    this.getRepaymentList();
    this.getAcquisitionList();
     }

    getAuthorizationList(){
        this.isLoading['authorization'] = true;
        let data = {
            'datapoint': 'dashboard_authorisation',
            'source': 'LMS',
            'filter_type': this.selectedTab['authorization']
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res?: any)=> {
        this.fetchedList['authorization'] = res?.data
            this.isLoading['authorization'] = false;
        }, err => {
            this.isLoading['authorization'] = false;
        })
    }

    onChangeTab(e, action){
        if(action == 'nbfc'){
            this.selectedTab['nbfc'] = e;
            this.getNBFCList();
        } else if(action == 'delinquent'){
            this.selectedTab['delinquent'] = e;
            this.getDelinquentList();
        } else if (action == 'authorization'){
            this.selectedTab['authorization'] = e;
            this.getAuthorizationList();
        } else if (action == 'existing'){
            this.selectedTab['existing'] = e;
            this.getExistingList();
        } else if (action == 'acquisition'){
            this.selectedTab['acquisition'] = e;
            this.getAcquisitionList();
        } else if (action == 'mandate'){
            this.selectedTab['mandate'] = e;
            this.getMandateData();
        } else if (action == 'corporate'){
            this.selectedTab['corporate'] = e;
            this.getCorporateList();
        } else if (action == 'repayment'){
            this.selectedTab['repayment'] = e;
            this.getRepaymentList();
        } 
        // 'acquisition': false,
        // 'existing': false,
    }

    getDelinquentList(){
        this.isLoading['delinquent'] = true;
        // this.customersChartData = [];
        let data = {
            'datapoint': 'dashboard_delinquent',
            'source': 'LMS',
            'filter_type': this.selectedTab['delinquent']
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res?: any)=> {
            this.fetchedList['delinquent'] = res?.data
            // customersChartData: number[] = [350, 450, 100, 243];
            // customersChartLabels: string[] = ['New', 'Returning', 'Others', 'blue'];
            this.isLoading['delinquent'] = false;
        }, err => {
            this.isLoading['delinquent'] = false;
        })
    }

    getExistingList(){
        this.isLoading['existing'] = true;
        let data = {
            'datapoint': 'dashboard_existing',
            'source': 'LMS',
            'filter_type': this.selectedTab['existing']
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res?: any)=> {
            // this.fetchedList['delinquent'] = res?.data
            this.thirty_day_user_activity = res?.data?.['30_day_user_activity']
            this.fetchedList['existing'] = res?.data
            this.isLoading['existing'] = false;
        }, err => {
            this.isLoading['existing'] = false;
        })
    }
    
    getCorporateList(){
        this.isLoading['corporate'] = true;
        let data = {
            // 'datapoint': 'dashboard_corporate',
            // 'source': 'LMS',
            'filter_type': this.selectedTab['corporate']
        }
        this.http.getCorporateDashboardList(data).subscribe((res?: any)=> {
            this.fetchedList['corporate'] = res?.data
            this.corporateChartData = []
            this.corporateChartData.push(res?.data?.fixed_count ? res?.data?.fixed_count : 0)
            this.corporateChartData.push(res?.data?.ewa_count ? res?.data?.ewa_count : 0 )
            console.log(this.corporateChartData);
            // this.corporateChartData.push(res?.data?.total_corporate_users_exact_count ? res?.data?.total_corporate_users_exact_count : 0 )
            // this.corporateChartData.push(res?.data?.active_users_exact_count ? res?.data?.active_users_exact_count : 0)
            // this.thirty_day_user_activity = res?.data?.['30_day_user_activity']
            // this.fetchedList['existing'] = res?.data
            this.isLoading['corporate'] = false;
        }, err => {
            this.isLoading['corporate'] = false;
        })
    }

    getRepaymentList(){
        this.isLoading['repayment'] = true;
        let data = {
            'datapoint': 'dashboard_repayment',
            'source': 'LMS',
            'filter_type': this.selectedTab['repayment']
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res?: any)=> {
            this.fetchedList['repayment'] = res?.data
            // this.thirty_day_user_activity = res?.data?.['30_day_user_activity']
            this.fetchedList['repayment'] = res?.data
            this.isLoading['repayment'] = false;
        }, err => {
            this.isLoading['repayment'] = false;
        })
    }

    getMandateData(){
        this.isLoading['mandate'] = true;
        let data = {
            'time_filter': this.selectedTab['mandate']
        }
        this.http.getDetailForDashboardMandate(data).subscribe((res?: any)=> {
            this.fetchedList['mandate'] = res?.data
            this.mandateChartData = []
            this.mandateChartData.push(res?.data?.aadhar_mandate ? res?.data?.aadhar_mandate : 0)
            this.mandateChartData.push(res?.data?.debitcard_mandate ? res?.data?.debitcard_mandate   : 0 )
            this.mandateChartData.push(res?.data?.netbanking_mandate ? res?.data?.netbanking_mandate : 0 )
            // this.mandateChartData.push(res?.data?.total_mandate_done ? res?.data?.total_mandate_done : 0)
            this.mandateChartData.push(res?.data?.upi_mandate ? res?.data?.upi_mandate : 0)
            this.isLoading['mandate'] = false;
        }, err => {
            this.isLoading['mandate'] = false;
        })
    }

    getAcquisitionList(){
        this.isLoading['acquisition'] = true;
        let data = {
            'datapoint': 'dashboard_acquisition',
            'source': 'LMS',
            'filter_type': this.selectedTab['acquisition']
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res?: any)=> {
            this.fetchedList['acquisition'] = res?.data
            this.customersChartData = []
            this.customersChartData.push(res?.data?.app_registered_users_exact_count ? res?.data?.app_registered_users_exact_count : 0)
            this.customersChartData.push(res?.data?.all_registered_users_exact_count ? res?.data?.all_registered_users_exact_count : 0 )
            this.customersChartData.push(res?.data?.total_corporate_users_exact_count ? res?.data?.total_corporate_users_exact_count : 0 )
            this.customersChartData.push(res?.data?.active_users_exact_count ? res?.data?.active_users_exact_count : 0)
            this.isLoading['acquisition'] = false;
        }, err => {
            this.isLoading['acquisition'] = false;
        })
    }

    getNBFCList(){
        this.isLoading['nbfc'] = true;
        let data = {
            'datapoint': 'dashboard_nbfc',
            'source': 'LMS',
            'filter_type': this.selectedTab['nbfc']
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res?: any)=> {
            this.fetchedList['nbfc'] = res?.data
            const data = [
               res?.data?.total_nbfc_commitment,
               res?.data?.total_credit_line,
               res?.data?.fund_transfered_escrow,
               res?.data?.total_credit_line_balance,
               res?.data?.fund_in_escrow,
               res?.data?.total_credit_line_utilized
            ]
            this.nbfcGraphValue = data;
            this.designNBFCGraph();
            this.isLoading['nbfc'] = false;
        }, err => {
            this.isLoading['nbfc'] = false;
        })
    }

    designNBFCGraph() {
        this.avgProfitChartData = [
     
            {
              data: this.nbfcGraphValue.map((val) => {
                  if(!val){
                      val = 0
                  }
                //   var val: any;
                //   val = Math.abs(val);
                //   if (val >= 10000000) {
                //     val = (val / 10000000).toFixed(2) + " Cr";
                //   } else if (val >= 100000) {
                //     val = (val / 100000).toFixed(2) + " Lacs";
                //   }
                  return val;
              }),
              label: 'Amount of Money',
              type: "bar",
              categoryPercentage: 0.3,
              barPercentage: 0.5,
            }]
    }
    resetFilters() {
        this.selectedTab ={
            'delinquent': 'Today',
            'nbfc': 'Today',
            'authorization': 'Today',
            'existing': 'today',
            'acquisition': 'today',
            'mandate': 'today',
            'corporate': 'this month',
            'repayment': 'this month'
        } 
        this.getDelinquentList();
        this.getNBFCList();
        this.getAuthorizationList();
        this.getExistingList();
        this.getAcquisitionList();
        this.getMandateData();
        this.getCorporateList();
        this.getRepaymentList();
        
    }
}
