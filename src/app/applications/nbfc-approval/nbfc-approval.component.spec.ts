import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbfcApprovalComponent } from './nbfc-approval.component';

describe('NbfcApprovalComponent', () => {
  let component: NbfcApprovalComponent;
  let fixture: ComponentFixture<NbfcApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbfcApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbfcApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
