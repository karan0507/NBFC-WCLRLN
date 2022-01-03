import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLendersComponent } from './add-edit-lenders.component';

describe('AddEditLendersComponent', () => {
  let component: AddEditLendersComponent;
  let fixture: ComponentFixture<AddEditLendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLendersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
