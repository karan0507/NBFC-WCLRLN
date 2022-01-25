import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLineIncDecComponent } from './credit-line-inc-dec.component';

describe('CreditLineIncDecComponent', () => {
  let component: CreditLineIncDecComponent;
  let fixture: ComponentFixture<CreditLineIncDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditLineIncDecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLineIncDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
