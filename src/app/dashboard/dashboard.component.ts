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
    cyan = this.themeColors.cyan;
    cyanLight = this.themeColors.cyanLight;
    gold = this.themeColors.gold;
    purple = this.themeColors.purple;
    purpleLight = this.themeColors.purpleLight;
    red = this.themeColors.red;
    customersChartData: number[] = [350, 450, 100];
    customersChartLabels: string[] = ['New', 'Returning', 'Others'];
    customersChartType = 'doughnut';
    customersChartColors: Array<any> =  [{ 
        backgroundColor: [this.cyan, this.purple, this.gold],
        pointBackgroundColor : [this.cyan, this.purple, this.gold]
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
                    drawBorder: false,
                    offsetGridLines: false,
                    drawTicks: false,
                    borderDash: [3, 4],
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 4]
                },
                ticks: {                           
                    stepSize: 40,
                    display: true,
                    beginAtZero: true,
                    fontSize: 13,
                    padding: 10
                }
            }]
        }
    };
    avgProfitChartLabels: string[] = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    avgProfitChartType = 'bar';
    avgProfitChartLegend = false;
    avgProfitChartColors: Array<any> = [
        { 
            backgroundColor: '#55268E',
            borderWidth: 10
        }
    ];
    avgProfitChartData: any[] = [
        { 
            data: [38, 38, 30, 19, 56, 55, 31],
            label: 'Series A',
            categoryPercentage: 0.35,
            barPercentage: 0.3,
        }
    ];
    selectedTab ={
        'delinquent': 'Today',
        'nbfc': 'Today',
        'authorization': 'Today',
    } 
    constructor( private colorConfig:ThemeConstantService, public router: Router, private http: HttpService) { }

    ngOnInit(): void { }

    getAuthorizationList(){
        let data = {
            'datapoint': 'dashboard_authorization',
            'source': 'LMS',
            'filter_type': this.selectedTab['authorization']
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res)=> {
            console.log(res);
        }, err => {
            console.log(err);
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
        }
        console.log(e, + ' on click')
    }

    getDelinquentList(){
        let data = {
            'datapoint': 'dashboard_delinquent',
            'source': 'LMS',
            'filter_type': this.selectedTab['delinquent']
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res)=> {
            console.log(res);
        }, err => {
            console.log(err);
        })
    }

    getNBFCList(){
        let data = {
            'datapoint': 'dashboard_nbfc',
            'source': 'LMS',
            'filter_type': this.selectedTab['nbfc']
        }
        this.http.getDetailForDashboardAPI(data).subscribe((res)=> {
            console.log(res);
        }, err => {
            console.log(err);
        })
    }
}
