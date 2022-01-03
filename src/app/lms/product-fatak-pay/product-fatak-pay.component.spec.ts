import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFatakPayComponent } from './product-fatak-pay.component';

describe('ProductFatakPayComponent', () => {
  let component: ProductFatakPayComponent;
  let fixture: ComponentFixture<ProductFatakPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFatakPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFatakPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
