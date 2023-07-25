import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilStatementComponent } from './cibil-statement.component';

describe('CibilStatementComponent', () => {
  let component: CibilStatementComponent;
  let fixture: ComponentFixture<CibilStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibilStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
