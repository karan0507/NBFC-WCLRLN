import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiEligibilityListComponent } from './emi-eligibility-list.component';

describe('EmiEligibilityListComponent', () => {
  let component: EmiEligibilityListComponent;
  let fixture: ComponentFixture<EmiEligibilityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiEligibilityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiEligibilityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
