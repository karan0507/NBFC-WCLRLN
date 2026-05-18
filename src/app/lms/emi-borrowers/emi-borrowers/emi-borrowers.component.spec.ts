import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiBorrowersComponent } from './emi-borrowers.component';

describe('EmiBorrowersComponent', () => {
  let component: EmiBorrowersComponent;
  let fixture: ComponentFixture<EmiBorrowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiBorrowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiBorrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
