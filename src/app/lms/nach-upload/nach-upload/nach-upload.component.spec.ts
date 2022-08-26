import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NachUploadComponent } from './nach-upload.component';

describe('NachUploadComponent', () => {
  let component: NachUploadComponent;
  let fixture: ComponentFixture<NachUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NachUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NachUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
