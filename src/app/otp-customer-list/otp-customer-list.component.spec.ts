import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpCustomerListComponent } from './otp-customer-list.component';

describe('OtpCustomerListComponent', () => {
  let component: OtpCustomerListComponent;
  let fixture: ComponentFixture<OtpCustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpCustomerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
