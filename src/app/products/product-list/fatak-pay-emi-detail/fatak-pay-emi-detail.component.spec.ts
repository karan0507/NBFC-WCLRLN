import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatakPayEmiDetailComponent } from './fatak-pay-emi-detail.component';

describe('FatakPayEmiDetailComponent', () => {
  let component: FatakPayEmiDetailComponent;
  let fixture: ComponentFixture<FatakPayEmiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatakPayEmiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatakPayEmiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
