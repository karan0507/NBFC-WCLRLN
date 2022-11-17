import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRemarksComponent } from './transaction-remarks.component';

describe('TransactionRemarksComponent', () => {
  let component: TransactionRemarksComponent;
  let fixture: ComponentFixture<TransactionRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionRemarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
