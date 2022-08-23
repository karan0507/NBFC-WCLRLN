import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionsListComponent } from './deductions-list.component';

describe('DeductionsListComponent', () => {
  let component: DeductionsListComponent;
  let fixture: ComponentFixture<DeductionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
