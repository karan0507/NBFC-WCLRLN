import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleConfirmationPopupComponent } from './double-confirmation-popup.component';

describe('DoubleConfirmationPopupComponent', () => {
  let component: DoubleConfirmationPopupComponent;
  let fixture: ComponentFixture<DoubleConfirmationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleConfirmationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleConfirmationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
