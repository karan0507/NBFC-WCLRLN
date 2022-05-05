import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  api_calling_loader: boolean;
  listOfData: any;
  txn_id: any;

  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { 
      this.route.queryParams.subscribe(params => {
        if(params['id']){
          this.txn_id = params['id']
        }
      });
    }

  ngOnInit(): void {
    this.fetchTransactionList()
  }

  fetchTransactionList() {
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      id: this.txn_id
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      if (res['success']) {
        this.listOfData = res['data'][0]
      } else {
        this.message.error(res['message'])
      }
    }, (err) => {
      this.message.error('Something went wrong')
      this.api_calling_loader = false
    })
  }
}
