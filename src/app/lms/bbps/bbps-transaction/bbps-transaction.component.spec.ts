import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbpsTransactionComponent } from './bbps-transaction.component';

describe('BbpsTransactionComponent', () => {
  let component: BbpsTransactionComponent;
  let fixture: ComponentFixture<BbpsTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbpsTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbpsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
