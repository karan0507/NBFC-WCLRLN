import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLineIncDescComponent } from './credit-line-inc-desc.component';

describe('CreditLineIncDescComponent', () => {
  let component: CreditLineIncDescComponent;
  let fixture: ComponentFixture<CreditLineIncDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditLineIncDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLineIncDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
