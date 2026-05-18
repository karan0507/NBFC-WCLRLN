import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSummerizeComponent } from './bill-summerize.component';

describe('BillSummerizeComponent', () => {
  let component: BillSummerizeComponent;
  let fixture: ComponentFixture<BillSummerizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillSummerizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillSummerizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
