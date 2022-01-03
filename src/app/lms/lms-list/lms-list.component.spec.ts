import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsListComponent } from './lms-list.component';

describe('LmsListComponent', () => {
  let component: LmsListComponent;
  let fixture: ComponentFixture<LmsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
