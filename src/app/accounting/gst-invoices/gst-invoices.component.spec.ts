import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstInvoicesComponent } from './gst-invoices.component';

describe('GstInvoicesComponent', () => {
  let component: GstInvoicesComponent;
  let fixture: ComponentFixture<GstInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
