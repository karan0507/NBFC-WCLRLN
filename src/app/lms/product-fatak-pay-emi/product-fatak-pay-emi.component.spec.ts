import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFatakPayEmiComponent } from './product-fatak-pay-emi.component';

describe('ProductFatakPayEmiComponent', () => {
  let component: ProductFatakPayEmiComponent;
  let fixture: ComponentFixture<ProductFatakPayEmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFatakPayEmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFatakPayEmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
