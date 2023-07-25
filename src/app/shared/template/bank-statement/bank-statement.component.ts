import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from '../../globalservices.service';

@Component({
    selector: 'app-bank-statement',
    templateUrl: './bank-statement.component.html',
    styleUrls: ['./bank-statement.component.css']
})
export class BankStatementComponent implements OnInit {
    @Input() endpoint: any;
    @Input() endpoint_id: any;
    history_data = {
        "id": 697,
        "bankstatementcamanalysismonthly_set": [
            {
                "custom_day_balances_mean": 18620.56,
                "month": "Apr-2023",
                "gross_credit_amount": "296678.00",
                "no_of_net_credit": 3,
                "net_credit_amount": "3214.00",
                "gross_debit_amount": "338926.82",
                "no_of_net_debit": 20,
                "net_debit_amount": "239925.82",
                "no_of_inward_return": 0,
                "inward_return": "0.00",
                "no_of_outward_return": 0,
                "outward_return": "0.00",
                "loan_disbursal": "194463.00",
                "custom_day_balances_5": "47703.34",
                "custom_day_balances_10": "16312.93",
                "custom_day_balances_15": "14381.08",
                "custom_day_balances_20": "17228.08",
                "custom_day_balances_25": "10643.42",
                "custom_day_balances_30": "5454.52"
            },
            {
                "custom_day_balances_mean": 17109.5,
                "month": "May-2023",
                "gross_credit_amount": "190665.00",
                "no_of_net_credit": 7,
                "net_credit_amount": "93958.00",
                "gross_debit_amount": "196099.22",
                "no_of_net_debit": 18,
                "net_debit_amount": "196099.22",
                "no_of_inward_return": 0,
                "inward_return": "0.00",
                "no_of_outward_return": 0,
                "outward_return": "0.00",
                "loan_disbursal": "96707.00",
                "custom_day_balances_5": "139.52",
                "custom_day_balances_10": "2293.80",
                "custom_day_balances_15": "2293.80",
                "custom_day_balances_20": "600.80",
                "custom_day_balances_25": "97308.80",
                "custom_day_balances_30": "20.30"
            },
            {
                "custom_day_balances_mean": 1641.38,
                "month": "Jun-2023",
                "gross_credit_amount": "57048.00",
                "no_of_net_credit": 3,
                "net_credit_amount": "57048.00",
                "gross_debit_amount": "55811.50",
                "no_of_net_debit": 10,
                "net_debit_amount": "55811.50",
                "no_of_inward_return": 0,
                "inward_return": "0.00",
                "no_of_outward_return": 0,
                "outward_return": "0.00",
                "loan_disbursal": "0.00",
                "custom_day_balances_5": "1505.30",
                "custom_day_balances_10": "3286.30",
                "custom_day_balances_15": "1286.30",
                "custom_day_balances_20": "1256.80",
                "custom_day_balances_25": "1256.80",
                "custom_day_balances_30": "1256.80"
            },
            {
                "custom_day_balances_mean": 25152.8,
                "month": "Jul-2023",
                "gross_credit_amount": "49121.00",
                "no_of_net_credit": 3,
                "net_credit_amount": "49050.00",
                "gross_debit_amount": "20460.00",
                "no_of_net_debit": 4,
                "net_debit_amount": "20460.00",
                "no_of_inward_return": 0,
                "inward_return": "0.00",
                "no_of_outward_return": 0,
                "outward_return": "0.00",
                "loan_disbursal": "0.00",
                "custom_day_balances_5": "1327.80",
                "custom_day_balances_10": "29917.80",
                "custom_day_balances_15": "29917.80",
                "custom_day_balances_20": "29917.80",
                "custom_day_balances_25": "29917.80",
                "custom_day_balances_30": "29917.80"
            },
            {
                "custom_day_balances_mean": 0,
                "month": "Grand Total",
                "gross_credit_amount": "593512.00",
                "no_of_net_credit": 16,
                "net_credit_amount": "203270.00",
                "gross_debit_amount": "611297.54",
                "no_of_net_debit": 52,
                "net_debit_amount": "512296.54",
                "no_of_inward_return": 0,
                "inward_return": "0.00",
                "no_of_outward_return": 0,
                "outward_return": "0.00",
                "loan_disbursal": "291170.00",
                "custom_day_balances_5": null,
                "custom_day_balances_10": null,
                "custom_day_balances_15": null,
                "custom_day_balances_20": null,
                "custom_day_balances_25": null,
                "custom_day_balances_30": null
            }
        ],
        "bankstatementemi_set": [
            {
                "list_title": "EARLYSALARY",
                "list_items": [
                    {
                        "common_entity": "EARLYSALARY",
                        "transactions_id": 31,
                        "transaction_date": "1682965800000",
                        "narration": "ACH-DR-CTRAZORPAY- EARLYSALARLkZjNuXrJPgC6x-UTIB70",
                        "payment_mode": "Other",
                        "payment_category": "EMI",
                        "amount": "4515.00",
                        "type": "Dr",
                        "closing_balance": "139.52",
                        "month_year": "May-2023"
                    },
                    {
                        "common_entity": "EARLYSALARY",
                        "transactions_id": 56,
                        "transaction_date": "1685644200000",
                        "narration": "ACH-DR-CTRAZORPAY- EARLYSALARLwq1MzEeIbaNbL-UTIB70",
                        "payment_mode": "Other",
                        "payment_category": "EMI",
                        "amount": "4515.00",
                        "type": "Dr",
                        "closing_balance": "1505.30",
                        "month_year": "Jun-2023"
                    }
                ]
            },
            {
                "list_title": "Yes Bank",
                "list_items": [
                    {
                        "common_entity": "Yes Bank",
                        "transactions_id": 0,
                        "transaction_date": "1680892200000",
                        "narration": "ACH-DR-Yes Bank Limited-PLN000701254790- UTIB70227",
                        "payment_mode": "Other",
                        "payment_category": "EMI",
                        "amount": "3466.00",
                        "type": "Dr",
                        "closing_balance": "44237.34",
                        "month_year": "Apr-2023"
                    },
                    {
                        "common_entity": "Yes Bank",
                        "transactions_id": 39,
                        "transaction_date": "1683484200000",
                        "narration": "ACH-DR-Yes Bank Limited-PLN000701254790- UTIB70227",
                        "payment_mode": "Other",
                        "payment_category": "EMI",
                        "amount": "3466.00",
                        "type": "Dr",
                        "closing_balance": "3205.80",
                        "month_year": "May-2023"
                    },
                    {
                        "common_entity": "Yes Bank",
                        "transactions_id": 60,
                        "transaction_date": "1686162600000",
                        "narration": "ACH-DR-Yes Bank Limited-PLN000701254790- UTIB70227",
                        "payment_mode": "Other",
                        "payment_category": "EMI",
                        "amount": "3466.00",
                        "type": "Dr",
                        "closing_balance": "47087.30",
                        "month_year": "Jun-2023"
                    }
                ]
            }
        ],
        "bankstatementrecurringincome_set": [
            {
                "id": 3351,
                "converted_transaction_date": "2023-05-06 00:00:00",
                "transaction_date": "1683311400000",
                "narration": "BRN-SALARY PAYMENT-CONCORD BIOTEXH LTD",
                "payment_mode": "Other",
                "payment_category": "Salary",
                "amount": "49048.00",
                "type": "Cr",
                "closing_balance": "49187.52",
                "month_year": "May-2023",
                "is_deleted": false
            },
            {
                "id": 3352,
                "converted_transaction_date": "2023-06-07 00:00:00",
                "transaction_date": "1686076200000",
                "narration": "BRN-SALARY PAYMENT-BY SALARY MAY 20",
                "payment_mode": "Other",
                "payment_category": "Salary",
                "amount": "49048.00",
                "type": "Cr",
                "closing_balance": "50553.30",
                "month_year": "Jun-2023",
                "is_deleted": false
            },
            {
                "id": 3353,
                "converted_transaction_date": "2023-07-07 00:00:00",
                "transaction_date": "1688668200000",
                "narration": "BRN-SALARY PAYMENT-BY SALARY JUNE 2",
                "payment_mode": "Other",
                "payment_category": "Salary",
                "amount": "49048.00",
                "type": "Cr",
                "closing_balance": "49917.80",
                "month_year": "Jul-2023",
                "is_deleted": false
            }
        ],
        "bankstatementtransactions_set": [
            {
                "id": 194229,
                "converted_transaction_date": "2023-04-19 00:00:00",
                "transaction_date": "1681842600000",
                "narration": "BRN-SALARY PAYMENT-OVERTIME MARCH 2023",
                "payment_mode": "Other",
                "payment_category": "Salary",
                "amount": "3212.00",
                "type": "Cr",
                "closing_balance": "17593.08",
                "month_year": "Apr-2023",
                "is_deleted": false
            },
            {
                "id": 194247,
                "converted_transaction_date": "2023-05-06 00:00:00",
                "transaction_date": "1683311400000",
                "narration": "BRN-SALARY PAYMENT-CONCORD BIOTEXH LTD",
                "payment_mode": "Other",
                "payment_category": "Salary",
                "amount": "49048.00",
                "type": "Cr",
                "closing_balance": "49187.52",
                "month_year": "May-2023",
                "is_deleted": false
            },
            {
                "id": 194272,
                "converted_transaction_date": "2023-06-07 00:00:00",
                "transaction_date": "1686076200000",
                "narration": "BRN-SALARY PAYMENT-BY SALARY MAY 20",
                "payment_mode": "Other",
                "payment_category": "Salary",
                "amount": "49048.00",
                "type": "Cr",
                "closing_balance": "50553.30",
                "month_year": "Jun-2023",
                "is_deleted": false
            },
            {
                "id": 194286,
                "converted_transaction_date": "2023-07-07 00:00:00",
                "transaction_date": "1688668200000",
                "narration": "BRN-SALARY PAYMENT-BY SALARY JUNE 2",
                "payment_mode": "Other",
                "payment_category": "Salary",
                "amount": "49048.00",
                "type": "Cr",
                "closing_balance": "49917.80",
                "month_year": "Jul-2023",
                "is_deleted": false
            }
        ],
        "salary": null,
        "total_net_credits": "203270.00",
        "average_balance": "15132.71",
        "min_balance_last_six_month": "20.30",
        "min_balance_last_three_month": "20.30",
        "doc_id": "DOC05932019",
        "bank_name": "AXIS",
        "bank_full_name": "Axis Bank",
        "account_number": "919010065215023",
        "account_name": "SALAIYA BHAVESH",
        "ifsc_code": "UTIB0002644",
        "account_type": "Saving",
        "account_opening_date": null,
        "product_type": null,
        "period_start": "2023-04-08",
        "period_end": "2023-07-07",
        "address": "270/3,GOPALNAGAR,CHANDLODIYA, AHMEDABAD NEAR GIRIRAJ-2 AHMEDABAD GUJARAT-INDIA 382481",
        "email": null,
        "mobile_number": null,
        "pan_number": "FORM60",
        "document_type": "Statement",
        "fraud_score": "0.00",
        "od_cc_limit": 0,
        "inward_return_count": 0,
        "inward_return_amount": 0,
        "outward_return_count": 0,
        "outward_return_amount": 0,
        "custom_average_balance": "15631.06",
        "average_balance_last_six_month": "15132.71",
        "average_receipt_last_six_month": "50817.50",
        "average_balance_last_twelve_month": "15132.71",
        "average_receipt_last_twelve_month": "50817.50",
        "salary_credit_count_last_six_month": 4,
        "salary_credit_count_last_three_month": 2,
        "min_balance_charge_count_last_six_month": 0,
        "months_evaluated": 4,
        "response": null,
        "created_at": "2023-07-07T21:58:15.356931+05:30",
        "updated_at": "2023-07-07T21:58:15.356950+05:30",
        "is_deleted": false,
        "loan_application": 618300,
        "app_user": 653848,
        "custom_balances_details": [
            {
                "custom_day_balances_mean": 18620.56,
                "month": "Apr-2023",
                "custom_day_balances_5": 47703.34,
                "custom_day_balances_10": 16312.93,
                "custom_day_balances_15": 14381.08,
                "custom_day_balances_20": 17228.08,
                "custom_day_balances_25": 10643.42,
                "custom_day_balances_30": 5454.52
            },
            {
                "custom_day_balances_mean": 17109.5,
                "month": "May-2023",
                "custom_day_balances_5": 139.52,
                "custom_day_balances_10": 2293.8,
                "custom_day_balances_15": 2293.8,
                "custom_day_balances_20": 600.8,
                "custom_day_balances_25": 97308.8,
                "custom_day_balances_30": 20.3
            },
            {
                "custom_day_balances_mean": 1641.38,
                "month": "Jun-2023",
                "custom_day_balances_5": 1505.3,
                "custom_day_balances_10": 3286.3,
                "custom_day_balances_15": 1286.3,
                "custom_day_balances_20": 1256.8,
                "custom_day_balances_25": 1256.8,
                "custom_day_balances_30": 1256.8
            },
            {
                "custom_day_balances_mean": 25152.8,
                "month": "Jul-2023",
                "custom_day_balances_5": 1327.8,
                "custom_day_balances_10": 29917.8,
                "custom_day_balances_15": 29917.8,
                "custom_day_balances_20": 29917.8,
                "custom_day_balances_25": 29917.8,
                "custom_day_balances_30": 29917.8
            },
            {
                "custom_day_balances_mean": 0,
                "month": "Grand Total",
                "custom_day_balances_5": null,
                "custom_day_balances_10": null,
                "custom_day_balances_15": null,
                "custom_day_balances_20": null,
                "custom_day_balances_25": null,
                "custom_day_balances_30": null
            }
        ]
    };
    loading: boolean;
    // _cu
    constructor(public https: HttpService, public message: NzMessageService, public global: GlobalservicesService) {

    }

    ngOnInit(): void {
        this.fetchBankStatement();
    }

    fetchBankStatement() {
        if (this.endpoint == 'Onboarding') {
            let data = {
                source: 'Onboarding',
                datapoint: 'bank_statement_details',
                endpoint: this.endpoint_id,
            }
            this.loading = true
            setTimeout(() => {
                this.loading = false;
            }, 400);
            return;
            this.https.fetchBankStatements(data).subscribe( res => {
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


    // Let Testing Variable

}
