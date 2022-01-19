import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderManagementComponent } from './lender-management.component';

describe('LenderManagementComponent', () => {
  let component: LenderManagementComponent;
  let fixture: ComponentFixture<LenderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenderManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
