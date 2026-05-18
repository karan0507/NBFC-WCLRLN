import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMerchantsComponent } from './add-edit-merchants.component';

describe('AddEditMerchantsComponent', () => {
  let component: AddEditMerchantsComponent;
  let fixture: ComponentFixture<AddEditMerchantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMerchantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
