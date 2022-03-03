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
      constructor(public https: HttpService, public route: ActivatedRoute) { }

      ngOnInit(): void {
            this.route.queryParams.subscribe(params => {
                  if (params['id']) {
                        this.currentLoanId = params['id'];
                        this.getLoanApplicationData();
                  }
            })

      }

      getLoanApplicationData() {
            let data = { 'source': 'Onboarding', 'datapoint' : 'track_application_status', 'endpoint' : this.currentLoanId}
            this.https.trackApplicationStatus(data).subscribe((res: any) => {
                  if (res) {
                        console.log(res);
                        this.loanStatusData = res?.data;
                  }
            })
      }
}
