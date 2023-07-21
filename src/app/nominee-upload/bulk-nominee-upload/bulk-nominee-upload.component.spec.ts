import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkNomineeUploadComponent } from './bulk-nominee-upload.component';

describe('BulkNomineeUploadComponent', () => {
  let component: BulkNomineeUploadComponent;
  let fixture: ComponentFixture<BulkNomineeUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkNomineeUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkNomineeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
