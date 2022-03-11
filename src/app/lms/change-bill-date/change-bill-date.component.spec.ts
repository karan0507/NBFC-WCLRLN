import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBillDateComponent } from './change-bill-date.component';

describe('ChangeBillDateComponent', () => {
  let component: ChangeBillDateComponent;
  let fixture: ComponentFixture<ChangeBillDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBillDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBillDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
