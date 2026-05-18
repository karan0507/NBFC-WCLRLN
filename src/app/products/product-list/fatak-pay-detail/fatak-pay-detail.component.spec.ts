import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatakPayDetailComponent } from './fatak-pay-detail.component';

describe('FatakPayDetailComponent', () => {
  let component: FatakPayDetailComponent;
  let fixture: ComponentFixture<FatakPayDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatakPayDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatakPayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
