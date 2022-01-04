import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  @Input() product_id: any;
  @Input() productDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
