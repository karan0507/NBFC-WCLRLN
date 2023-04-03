import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
      selector: 'app-track-status',
      templateUrl: './track-status.component.html',
      styleUrls: ['./track-status.component.css']
})
export class TrackStatusComponent implements OnInit {
      loanStatusData: any;
      currentLoanId: any;
      loanStatusTrackData: any;
      page = 1;
      globalPageSize = 100
      total_count: any;
      api_calling_loader: boolean;
      constructor(public https: HttpService, public route: ActivatedRoute) { }

      ngOnInit(): void {
            this.route.queryParams.subscribe(params => {
                  if (params['id']) {
                        this.currentLoanId = params['id'];
                        this.getLoanApplicationData();
                        this.getLoanApplicationTrackData();
                  }
            })

      }

      getLoanApplicationData() {
            let data = { 'source': 'Onboarding', 'datapoint' : 'track_application_status', 'endpoint' : this.currentLoanId}
            this.https.trackApplicationStatus(data).subscribe((res: any) => {
                  if (res?.success) {
                        console.log(res);
                        this.loanStatusData = res?.data;
                  }
            })
      }

      getLoanApplicationTrackData(tableFilter?) {
            this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
            this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 100;
            let data = { 
                  source: 'Onboarding',
                  datapoint : 'loan_application',
                  endpoint : 'LoanApplicationStageRemarks',
                  loan_application : this.currentLoanId,
                  page: this.page,
                  limit: this.globalPageSize,
            }
            this.api_calling_loader = true
            this.https.trackApplicationStatus(data).subscribe((res: any) => {
                  this.api_calling_loader = false
                  if (res?.success) {
                        console.log(res);
                        this.loanStatusTrackData = res?.data?.results;
                        this.total_count = res.data['total_count']
                  }
            })
      }
}
