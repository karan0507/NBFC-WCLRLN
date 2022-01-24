import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-transactions-preview',
  templateUrl: './upload-transactions-preview.component.html',
  styleUrls: ['./upload-transactions-preview.component.css']
})
export class UploadTransactionsPreviewComponent implements OnInit {

  @Input() listOfData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
