import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPolicyComponent } from './risk-policy.component';

describe('RiskPolicyComponent', () => {
  let component: RiskPolicyComponent;
  let fixture: ComponentFixture<RiskPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
