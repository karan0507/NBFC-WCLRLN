import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMastersComponent } from './add-edit-masters.component';

describe('AddEditMastersComponent', () => {
  let component: AddEditMastersComponent;
  let fixture: ComponentFixture<AddEditMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMastersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
