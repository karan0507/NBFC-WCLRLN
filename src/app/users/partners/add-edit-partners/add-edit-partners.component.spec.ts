import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPartnersComponent } from './add-edit-partners.component';

describe('AddEditPartnersComponent', () => {
  let component: AddEditPartnersComponent;
  let fixture: ComponentFixture<AddEditPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
