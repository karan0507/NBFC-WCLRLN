import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCouponCodeComponent } from './add-edit-coupon-code.component';

describe('AddEditCouponCodeComponent', () => {
  let component: AddEditCouponCodeComponent;
  let fixture: ComponentFixture<AddEditCouponCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCouponCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCouponCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
