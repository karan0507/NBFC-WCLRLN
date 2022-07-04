import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpdDaysComponent } from './dpd-days.component';

describe('DpdDaysComponent', () => {
  let component: DpdDaysComponent;
  let fixture: ComponentFixture<DpdDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpdDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpdDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
