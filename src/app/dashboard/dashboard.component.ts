import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeConstantService } from '../shared/services/theme-constant.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    themeColors = this.colorConfig.get().colors;
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
    customersChartLabels: string[] = ['Registered Through App', 'Total Registered Users', 'Total Corporate Users', 'Active User'];
    customersChartType = 'doughnut';
    customersChartColors: Array<any> =  [{ 
        backgroundColor: [this.cyan, this.purple, this.gold, this.pink],
        pointBackgroundColor : [this.cyan, this.purple, this.gold, this.pink]
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
                    padding: 4
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
            categoryPercentage: 35,
            barPercentage: 0.32,
        }
    ];
    selectedTab ={
        'delinquent': 'Today',
        'nbfc': 'Today',
        'authorization': 'Today',
        'existing': 'today',
        'acquisition': 'today',
    } 
    fetchedList ={
        'delinquent': '',
        'nbfc': null,
        'authorization': null,
        'acquisition': null,
        'existing': null,
    } 
    isLoading ={
        'delinquent': false,
        'nbfc': false,
        'authorization': false,
        'acquisition': false,
        'existing': false,
    } 
    thirty_day_user_activity: any;
    avgProfitChartDataCustomArray: any;
    nbfcGraphValue: any[];
    constructor( private colorConfig:ThemeConstantService, public router: Router, private http: HttpService) { }

    ngOnInit(): void {
    this.getAuthorizationList();
    this.getNBFCList();    
    this.getDelinquentList();   
    this.getExistingList();
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
                return val;
              }),
              type: "bar",
              categoryPercentage: 0.3,
              barPercentage: 0.5,
            }]
    }
}
