import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlackBoxTestingRoutingModule } from './black-box-testing-routing.module';
import { BlackBoxTestingComponent } from './black-box-testing.component';


@NgModule({
  declarations: [BlackBoxTestingComponent],
  imports: [
    CommonModule,
    BlackBoxTestingRoutingModule
  ]
})
export class BlackBoxTestingModule { }
