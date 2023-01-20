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
    skyblue = this.themeColors.skyblue;
    blue = this.themeColors.blue;
    blueLight = this.themeColors.blueLight;
    pink = this.themeColors.pink;
    cyan = this.themeColors.cyan;
    cyanLight = this.themeColors.cyanLight;
    gold = this.themeColors.gold;
    purple = this.themeColors.purple;
    purpleLight = this.themeColors.purpleLight;
    red = this.themeColors.red;
    customersChartData: number[] = [350, 450, 100];
    corporateChartData: number[] = [350, 450, 100, 243];
    mandateChartData: number[] = [350, 450, 100, 243];
    dummyData: number[] = [1];
    dummyDataLabels: string[] = ['No Data To Show'];
    dummyDataColors: Array<any> =  [{ 
        backgroundColor: [this.gray],
        pointBackgroundColor : [this.gray]
    }];
    customersChartLabels: string[] = ['Registered Users (Tie-up Corporate)', 'Disbursed User', 'Registered Users'];
    corporateChartLabels: string[] = ['Fixed product Count', 'EWA count'];
    mandateChartLabels: string[] = ['Aadhar Mandate', 'Debit Card Mandate', 'Net Banking Mandate', 'Upi Mandate'];
    customersChartType = 'doughnut';
    // , this.cyan
    customersChartColors: Array<any> =  [{ 
        backgroundColor: [this.gold, this.pink, this.purple],
        pointBackgroundColor : [this.gold, this.pink, this.purple]
    }];
    corporateChartColors: Array<any> =  [{ 
        backgroundColor: [ this.pink, this.purple,this.gold],
        pointBackgroundColor : [this.pink, this.purple,this.gold]
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
        'delinquent': 'Today',
        'nbfc': 'Today',
        'authorization': 'Today',
        'existing': 'this month',
        'acquisition': 'today',
        'mandate': 'today',
        'corporate': 'this month',
        'repayment': 'today',
    } 
    fetchedList ={
        'delinquent': null,
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
    partner: any;
    partnerList: any;
    avgProfitChartDataCustomArray: any;
    nbfcGraphValue: any[];

    // Bar Chart 

    creditHistoryChartData: any[] = [];
    totalCreditHistoryLabels:any;
    creditHistoryChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
         xAxes: [
           {
             gridLines: {
               display: false
             }
           }
         ],
         yAxes: [
           {
             gridLines: {
               display: true,
               borderDash: [3, 4],
             }
             ,
             ticks: {
               stepSize:0,
               beginAtZero: true,
               callback: function (value, index, values) {
                return value;
               }
             }
           }
         ]
       },
        cornerRadius: 100,
        plugins: {
          labels: {
            render: 'value'
          }
        },
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'black',
            boxWidth: 20,
            padding: 20,
            fontFamily: 'Poppins',
            fontSize: 13
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
       };


    // 2nd log
    
    barChartData: any[] = [
        {
          data: [],
          label: "Series A",
          categoryPercentage: 0.35,
          barPercentage: 0.7,
        },
      ];
    
      barChartLabels: string[] = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      barChartType = "bar";
      barChartLegend = false;
      barChartColors: Array<any> = [
        // {
        //   backgroundColor: this.purple,
        // },
        {
          backgroundColor: this.purple,
        },
      ];
    
      // *************Bar Chart Data******************
      barChartOptions: any = {
        // scaleShowVerticalLines: false,
    
        tooltips: {
          // mode: 'index',
          // intersect: false,
          enabled: false
        },
        "hover": {
          "animationDuration": 0
        },
    
        "animation": {
          "duration": 1,
          "onComplete": function () {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
            // ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
    
            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
    
              meta.data.forEach(function (bar, index) {
                if (bar?._datasetIndex !== 1) {
                  if (dataset.data[index] !== 'undefined') {
                    var val: any;
                    val = Math.abs(dataset.data[index]);
                    if (val >= 10000000) {
                      val = (val / 10000000).toFixed(2) + " Cr";
                    } else if (val >= 100000) {
                      val = (val / 100000).toFixed(2) + " Lacs";
                    }
                  }
                  var data = val
                  // 'Total Spends: ' +
                  ctx.fillText( data, bar._model.x, bar._model.y - 5);
    
                }
              });
            });
          }
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: Math.round,
            font: {
              weight: 'bold'
            }
          }
        },
        responsive: true,
        scales: {
          xAxes: [
            {
              display: true,
              stacked: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
              },
              gridLines: false,
              ticks: {
                display: true,
                beginAtZero: true,
                fontSize: 10,
                padding: 10,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              stacked: false,
              responsive: true,
              gridLines: {
                drawBorder: true,
                offsetGridLines: true,
                drawTicks: true,
                borderDash: [3, 4],
                zeroLineWidth: 1,
                zeroLineBorderDash: [3, 4],
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
              },
            },
          ],
        },
      };
    constructor( private colorConfig:ThemeConstantService, public router: Router, private http: HttpService) { }

    ngOnInit(): void {
    if (!sessionStorage.getItem('fatakpay_user_data')) {
            return;
    }
    this.onFocusMethod();
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
    this.fetchBorrowersGraph();
     }

    getAuthorizationList(){
        this.isLoading['authorization'] = true;
        let data = {
            'datapoint': 'dashboard_authorisation',
            'source': 'LMS',
            'filter_type': this.selectedTab['authorization']
        }
        if(this.partner){
          data['partner'] = this.partner
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
        if(this.partner){
            data['partner'] = this.partner
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
        if(this.partner){
            data['partner'] = this.partner
        }
        return;
        this.http.getDetailForDashboardAPI(data).subscribe((res?: any)=> {
            // this.fetchedList['delinquent'] = res?.data
            this.thirty_day_user_activity = res?.data?.['30_day_user_activity']
            this.fetchedList['existing'] = res?.data
            this.isLoading['existing'] = false;
            // this.designGraph(res?.data?.spend_graph_data);
            // this.fetchBorrowersGraph();
        }, err => {
            this.isLoading['existing'] = false;
        })
    }

    fetchBorrowersGraph(){
      let data = {
        source: 'LMS',
        datapoint:'dashboard_spends_graph',
        // partner
      }
      if(this.partner){
        data['partner'] = this.partner
      }
              return;
              this.http.fetchXMLData(data).subscribe((res)=>{
                console.log('AJmal');
                this.designGraph(res?.data?.spend_graph_data);
                console.log(res);
              })
    }

    designGraph(e){
        // this.totalUserCountDPDLabels = data.map((val) => {
        //     //  if(val.dpd_count > 0){
        //        return val.label;
        //     // }
            
        //   });
        //   this.countChartData = [    
        //     {
        //       data: data.map((val) => {
        //         return val.total_line_used;        
        //       }),
        //       label: "DPD Count",
        //       type: "bar",
        //       categoryPercentage: 0.35,
        //       barPercentage: 0.4,
        //      }   
        //   ];
        
        this.barChartLabels = e.map((val) => {
            console.log(val)
            return val?.label;
           
         });
        //  barChartData: any[] = [
        //     {
        //       data: [],
        //       label: "Series A",
        //       categoryPercentage: 0.35,
        //       barPercentage: 0.7,
        //     },
        //   ];
         this.barChartData = [  
           {
             data: e.map((val) => {
                return val.total_line_used;        
             }),
             label: "Total Line Used",
             type: "bar",
             categoryPercentage: 0.35,
             barPercentage: 0.7,
            },  
        //    {
        //      data: this.creditHistoryChart?.total_disbursement.map((val) => {
        //        return val?.month_count;        
        //      }),
        //      label: "Credit History",
        //      type: "bar",
        //      categoryPercentage: 0.35,
        //      barPercentage: 0.7,
        //      }     
         ];
    }

    onFocusMethod(keyword?){
        
        // if(keyword){

        // }
        this. http.fetchPartner().subscribe((res:any)=>{
            this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
      })
    }

    onSearch(e){
        console.log(e);
        // if(e?.length > 3){
        //     this.onFocusMethod(e)
        // }
        console.log(this.partner);
    }

    onSelectFetchCorrespondingData(){
        // this.resetFilters();
        this.fetchBorrowersGraph();
        this.getDelinquentList();
        this.getNBFCList();
        this.getAuthorizationList();
        this.getExistingList();
        this.getAcquisitionList();
        this.getMandateData();
        this.getCorporateList();
        this.getRepaymentList();
    }
    
    getCorporateList(){
        this.isLoading['corporate'] = true;
        let data = {
            // 'datapoint': 'dashboard_corporate',
            // 'source': 'LMS',
            'filter_type': this.selectedTab['corporate']
        }
        if(this.partner){
            data['partner'] = this.partner
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
        // if(this.partner){
        //     data['partner'] = this.partner
        // }
        if(this.partner){
            data['partner'] = this.partner
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
        if(this.partner){
            data['partner'] = this.partner
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
        if(this.partner){
            data['partner'] = this.partner
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res?: any)=> {
            this.fetchedList['acquisition'] = res?.data
            this.customersChartData = []
            // this.customersChartData.push(res?.data?.app_registered_users_exact_count ? res?.data?.app_registered_users_exact_count : 0)
            this.customersChartData.push(res?.data?.total_corporate_users_exact_count ? res?.data?.total_corporate_users_exact_count : 0 )
            this.customersChartData.push(res?.data?.active_users_exact_count ? res?.data?.active_users_exact_count : 0)
            this.customersChartData.push(res?.data?.all_registered_users_exact_count ? res?.data?.all_registered_users_exact_count : 0 )
            this.isLoading['acquisition'] = false;
        }, err => {
            this.isLoading['acquisition'] = false;
        })
    }

    getNBFCList(){
      return;
        this.isLoading['nbfc'] = true;
        let data = {
            'datapoint': 'dashboard_nbfc',
            'source': 'LMS',
            'filter_type': this.selectedTab['nbfc']
        }
        if(this.partner){
            data['partner'] = this.partner
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
        this.partner = '';
        this.selectedTab ={
            'delinquent': 'Today',
            'nbfc': 'Today',
            'authorization': 'Today',
            'existing': 'this month',
            'acquisition': 'today',
            'mandate': 'today',
            'corporate': 'this month',
            'repayment': 'today'
        } 
        this.getDelinquentList();
        this.getNBFCList();
        this.getAuthorizationList();
        this.getExistingList();
        this.getAcquisitionList();
        this.getMandateData();
        this.getCorporateList();
        this.getRepaymentList();
        this.fetchBorrowersGraph();
        
    }
}
