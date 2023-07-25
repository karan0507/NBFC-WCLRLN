import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from '../../globalservices.service';

@Component({
  selector: 'app-cibil-statement',
  templateUrl: './cibil-statement.component.html',
  styleUrls: ['./cibil-statement.component.css']
})
export class CibilStatementComponent implements OnInit {
  @Input() endpoint: any;
  @Input() endpoint_id: any;
  history_data = {
    "name": "PRITI PRASHANT PILANKAR",
    "pan": "ANQPP6457K",
    "dob": "1974-03-17",
    "age": "1974-03-17",
    "gender": "FEMALE",
    "mobile": "9029421103",
    "email": "PRASHANTPILANKAR03@GMAIL.COM",
    "cibil_score": "599",
    "age_of_oldest_trade": 194,
    "no_of_total_trade_lines": 0,
    "no_of_active_trade_lines": 13,
    "total_sanction_amount": 2374394,
    "total_balance_amount": 2046276,
    "no_of_inqueries_in_last_30_days": 0,
    "no_of_inqueries_in_last_12_months": 1,
    "no_of_past_due_accounts": 2,
    "no_of_written_off_accounts": 0,
    "total_monthly_payment_amount": 21390,
    "most_severe_status_last_24_months": "Res",
    "cibilretailaccountdetails_set": [
        {
            "id": 3274011,
            "seq": 1,
            "account_number": "FEDKCS0HL0484146",
            "institution": "Fedbank Financial Services Limited",
            "account_type": "Housing Loan",
            "ownership_type": "Joint Account",
            "balance": "1525263.00",
            "past_due_amount": "0.00",
            "open": "Yes",
            "sanction_amount": "1556405.00",
            "last_payment_date": "2023-05-29",
            "date_reported": "2023-05-31",
            "date_opened": "2020-02-29",
            "repayment_tenure": null,
            "account_status": "Restructured Due to COVID19",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274012,
            "seq": 2,
            "account_number": "0005241810402565691",
            "institution": "HDFC Bank Limited",
            "account_type": "Credit Card",
            "ownership_type": "Individual",
            "balance": "68236.00",
            "past_due_amount": null,
            "open": "Yes",
            "sanction_amount": null,
            "last_payment_date": "2023-06-14",
            "date_reported": "2023-07-01",
            "date_opened": "2016-10-20",
            "repayment_tenure": null,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274013,
            "seq": 3,
            "account_number": "0004815080041314534",
            "institution": "HDFC Bank Limited",
            "account_type": "Consumer Loan",
            "ownership_type": "Individual",
            "balance": "0.00",
            "past_due_amount": null,
            "open": "Yes",
            "sanction_amount": "23700.00",
            "last_payment_date": "2019-08-05",
            "date_reported": "2023-07-01",
            "date_opened": "2018-11-09",
            "repayment_tenure": null,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274014,
            "seq": 4,
            "account_number": "4624901100183307",
            "institution": "BOB Cards",
            "account_type": "Credit Card",
            "ownership_type": "Individual",
            "balance": "23451.00",
            "past_due_amount": "0.00",
            "open": "Yes",
            "sanction_amount": null,
            "last_payment_date": "2023-06-27",
            "date_reported": "2023-06-30",
            "date_opened": "2018-09-29",
            "repayment_tenure": null,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274015,
            "seq": 5,
            "account_number": "4908198198088434",
            "institution": "Indusind Bank Limited",
            "account_type": "Credit Card",
            "ownership_type": "Individual",
            "balance": "49951.00",
            "past_due_amount": "0.00",
            "open": "Yes",
            "sanction_amount": null,
            "last_payment_date": "2023-06-13",
            "date_reported": "2023-06-30",
            "date_opened": "2020-09-29",
            "repayment_tenure": null,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274016,
            "seq": 6,
            "account_number": "4050CDIF634403",
            "institution": "Bajaj Finance Limited",
            "account_type": "Consumer Loan",
            "ownership_type": "Individual",
            "balance": "0.00",
            "past_due_amount": "0.00",
            "open": "Yes",
            "sanction_amount": "18500.00",
            "last_payment_date": "2023-01-02",
            "date_reported": "2023-06-01",
            "date_opened": "2022-05-09",
            "repayment_tenure": 8,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274017,
            "seq": 7,
            "account_number": "P405PTP4946028",
            "institution": "Bajaj Finance Limited",
            "account_type": "Personal Loan",
            "ownership_type": "Individual",
            "balance": "141054.00",
            "past_due_amount": "0.00",
            "open": "Yes",
            "sanction_amount": "175789.00",
            "last_payment_date": "2023-06-02",
            "date_reported": "2023-06-01",
            "date_opened": "2022-07-10",
            "repayment_tenure": null,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274018,
            "seq": 8,
            "account_number": "AC2019110686752",
            "institution": "Clix Capital Services Pvt Ltd",
            "account_type": "Personal Loan",
            "ownership_type": "Individual",
            "balance": "26456.00",
            "past_due_amount": "0.00",
            "open": "Yes",
            "sanction_amount": "200000.00",
            "last_payment_date": null,
            "date_reported": "2023-05-31",
            "date_opened": "2019-11-13",
            "repayment_tenure": null,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274019,
            "seq": 9,
            "account_number": "9406141001541336",
            "institution": "Kotak Mahindra Bank Ltd.",
            "account_type": "Credit Card",
            "ownership_type": "Individual",
            "balance": "70122.00",
            "past_due_amount": "0.00",
            "open": "Yes",
            "sanction_amount": null,
            "last_payment_date": "2023-05-08",
            "date_reported": "2023-05-31",
            "date_opened": "2022-07-07",
            "repayment_tenure": null,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274020,
            "seq": 10,
            "account_number": "AC2019110686752",
            "institution": "Clix Finance India Unlimited",
            "account_type": "Personal Loan",
            "ownership_type": "Individual",
            "balance": "46605.00",
            "past_due_amount": "0.00",
            "open": "Yes",
            "sanction_amount": "200000.00",
            "last_payment_date": null,
            "date_reported": "2022-12-31",
            "date_opened": "2019-11-13",
            "repayment_tenure": null,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274021,
            "seq": 11,
            "account_number": "AC2019110686752",
            "institution": "Clix Housing Finance Private Limited",
            "account_type": "Personal Loan",
            "ownership_type": "Individual",
            "balance": "78568.00",
            "past_due_amount": "0.00",
            "open": "Yes",
            "sanction_amount": "200000.00",
            "last_payment_date": null,
            "date_reported": "2022-07-31",
            "date_opened": "2019-11-13",
            "repayment_tenure": null,
            "account_status": "Current Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274022,
            "seq": 12,
            "account_number": "0004207398224264813",
            "institution": "SBI Cards and Payment Services Ltd",
            "account_type": "Credit Card",
            "ownership_type": "Individual",
            "balance": "15511.00",
            "past_due_amount": "223.00",
            "open": "Yes",
            "sanction_amount": null,
            "last_payment_date": "2023-05-05",
            "date_reported": "2023-05-28",
            "date_opened": "2021-07-08",
            "repayment_tenure": null,
            "account_status": "1-29 days past due",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274023,
            "seq": 13,
            "account_number": "0005241826395525237",
            "institution": "SBI Cards and Payment Services Ltd",
            "account_type": "Credit Card",
            "ownership_type": "Individual",
            "balance": "1059.00",
            "past_due_amount": "1059.00",
            "open": "Yes",
            "sanction_amount": null,
            "last_payment_date": "2020-11-04",
            "date_reported": "2023-06-07",
            "date_opened": "2015-04-22",
            "repayment_tenure": null,
            "account_status": "60-89 days past due",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274024,
            "seq": 14,
            "account_number": "59DSPL219",
            "institution": "Mahanagar Co-operative Bank Ltd",
            "account_type": "Personal Loan",
            "ownership_type": "Individual",
            "balance": "226433.00",
            "past_due_amount": null,
            "open": "No",
            "sanction_amount": "450000.00",
            "last_payment_date": "2022-11-30",
            "date_reported": "2022-11-30",
            "date_opened": "2019-03-28",
            "repayment_tenure": null,
            "account_status": "Standard",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274025,
            "seq": 15,
            "account_number": "405SCEIE245165",
            "institution": "Bajaj Finance Limited",
            "account_type": "Consumer Loan",
            "ownership_type": "Individual",
            "balance": "0.00",
            "past_due_amount": "0.00",
            "open": "No",
            "sanction_amount": "45000.00",
            "last_payment_date": "2023-01-02",
            "date_reported": "2023-03-01",
            "date_opened": "2022-04-26",
            "repayment_tenure": null,
            "account_status": "Closed Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274026,
            "seq": 16,
            "account_number": "02354400015491",
            "institution": "Development Credit Bank Ltd.",
            "account_type": "Gold Loan",
            "ownership_type": "Individual",
            "balance": "0.00",
            "past_due_amount": "0.00",
            "open": "No",
            "sanction_amount": "0.00",
            "last_payment_date": "2023-01-02",
            "date_reported": "2023-01-31",
            "date_opened": "2022-08-23",
            "repayment_tenure": null,
            "account_status": "Closed Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274027,
            "seq": 17,
            "account_number": "MUMDP00061209",
            "institution": "Avanse Financial Services Limited",
            "account_type": "Personal Loan",
            "ownership_type": "Individual",
            "balance": "0.00",
            "past_due_amount": "0.00",
            "open": "No",
            "sanction_amount": "45000.00",
            "last_payment_date": "2019-09-30",
            "date_reported": "2019-10-31",
            "date_opened": "2019-08-31",
            "repayment_tenure": null,
            "account_status": "Closed Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274028,
            "seq": 18,
            "account_number": "405SCE23587815",
            "institution": "Bajaj Finance Limited",
            "account_type": "Consumer Loan",
            "ownership_type": "Individual",
            "balance": "0.00",
            "past_due_amount": "0.00",
            "open": "No",
            "sanction_amount": "18590.00",
            "last_payment_date": "2017-02-05",
            "date_reported": "2017-05-31",
            "date_opened": "2016-05-30",
            "repayment_tenure": null,
            "account_status": "Closed Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274029,
            "seq": 19,
            "account_number": "PRABHA-1219-476",
            "institution": "Bank of Baroda",
            "account_type": "Loan against Shares/Securities",
            "ownership_type": "Individual",
            "balance": null,
            "past_due_amount": null,
            "open": "No",
            "sanction_amount": "22000.00",
            "last_payment_date": "2014-11-21",
            "date_reported": "2014-12-31",
            "date_opened": "2007-06-01",
            "repayment_tenure": null,
            "account_status": "Closed Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274030,
            "seq": 20,
            "account_number": "004-373502-542",
            "institution": "Hongkong and Shanghai Banking Corporation Limited",
            "account_type": "Consumer Loan",
            "ownership_type": "Individual",
            "balance": "0.00",
            "past_due_amount": "0.00",
            "open": "No",
            "sanction_amount": "30000.00",
            "last_payment_date": "2014-08-19",
            "date_reported": "2014-08-31",
            "date_opened": "2007-05-02",
            "repayment_tenure": 40,
            "account_status": "Closed Account",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        },
        {
            "id": 3274031,
            "seq": 21,
            "account_number": "0004207399165682971",
            "institution": "SBI Cards and Payment Services Ltd",
            "account_type": "Credit Card",
            "ownership_type": "Individual",
            "balance": "-1.00",
            "past_due_amount": "0.00",
            "open": "No",
            "sanction_amount": null,
            "last_payment_date": "2022-10-22",
            "date_reported": "2023-05-28",
            "date_opened": "2019-03-09",
            "repayment_tenure": null,
            "account_status": "Restructured Loan",
            "asset_classification": null,
            "source": "INDIVIDUAL"
        }
    ],
    "cibiladdressinfo_set": [
        {
            "id": 601162,
            "seq": 1,
            "reported_date": "2023-06-01",
            "address": "E 32  PLOT C S 108 BEST STAFF PAREL RAJKAMAL MARG QUARTERS  PAREL RAJKAMAL MARG MAHARASHTRA 400012",
            "state": "MH",
            "pincode": "400012",
            "type": "Primary"
        },
        {
            "id": 601163,
            "seq": 2,
            "reported_date": "2023-01-31",
            "address": "E/32 3RD FLOOR  BEST STAFF QUARTER  RAJKAMAL  NEAR GANDHI HOSPITAL  PAREL MUMBAI CITY",
            "state": "MH",
            "pincode": "400012",
            "type": null
        },
        {
            "id": 601164,
            "seq": 3,
            "reported_date": "2022-11-30",
            "address": "E 32  PLOT C S 108 BEST STAFF PAREL RAJKAMAL MARG QUARTERS  PAREL RAJKAMAL MARG  NEAR GANDHI HOSPITAL  MAHARASHTRA 400012",
            "state": "MH",
            "pincode": "400012",
            "type": "Primary"
        },
        {
            "id": 601165,
            "seq": 4,
            "reported_date": "2022-11-30",
            "address": "3/319 SHRAMIK NIWAS SANE GURUJI MARG CHINCHPOKALI MUMBAI MUMBAI",
            "state": "MH",
            "pincode": "400012",
            "type": null
        },
        {
            "id": 601166,
            "seq": 5,
            "reported_date": "2022-07-31",
            "address": "E 32  PLOT C S 108 BEST STAFF PAREL RAJKAMAL MARG QUARTERS  PAREL RAJKAMAL MARG  NEAR GANDHI HOSPITAL  MAHARASHTRA 400012 400012",
            "state": "MH",
            "pincode": "400012",
            "type": "Primary"
        }
    ]
}
loading: boolean;
constructor(public https: HttpService, public message: NzMessageService, public global: GlobalservicesService) {

}

  ngOnInit(): void {
    this.fetchCibilStatement();
  }

  fetchCibilStatement() {
    if (this.endpoint == 'Onboarding') {
        let data = {
            source: 'Onboarding',
            datapoint: 'cibil_statement_details',
            endpoint: this.endpoint_id,
        }
        this.loading = true
        setTimeout(() => {
            this.loading = false;
        }, 400);
        this.https.fetchCibilList(data).subscribe( res => {
          if (res?.success) {
            this.history_data = res.data
            this.loading = false
          } else {
            this.loading = false

          }
        }, err => {

        })
    } else {
        this.loading = true
        let data = {
            id: this.endpoint_id
        }
        // this.https.fetchBankStatements(data, this.endpoint).subscribe( res => {
        //   if (res['success']) {
        //     this.history_data = res['data']
        //   } else {

        //   }
        //   this.loading = false
        // }, err => {

        // })
    }
}

}
