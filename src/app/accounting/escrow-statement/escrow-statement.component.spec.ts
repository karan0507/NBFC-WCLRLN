import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscrowStatementComponent } from './escrow-statement.component';

describe('EscrowStatementComponent', () => {
  let component: EscrowStatementComponent;
  let fixture: ComponentFixture<EscrowStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscrowStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscrowStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
