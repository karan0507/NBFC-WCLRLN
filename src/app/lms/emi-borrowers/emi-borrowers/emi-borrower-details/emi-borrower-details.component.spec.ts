import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiBorrowerDetailsComponent } from './emi-borrower-details.component';

describe('EmiBorrowerDetailsComponent', () => {
  let component: EmiBorrowerDetailsComponent;
  let fixture: ComponentFixture<EmiBorrowerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiBorrowerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiBorrowerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
