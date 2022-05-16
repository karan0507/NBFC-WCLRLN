import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPaymentLinkComponent } from './send-payment-link.component';

describe('SendPaymentLinkComponent', () => {
  let component: SendPaymentLinkComponent;
  let fixture: ComponentFixture<SendPaymentLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendPaymentLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPaymentLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
