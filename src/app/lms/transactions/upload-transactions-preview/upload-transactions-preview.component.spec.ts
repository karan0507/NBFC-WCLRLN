import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTransactionsPreviewComponent } from './upload-transactions-preview.component';

describe('UploadTransactionsPreviewComponent', () => {
  let component: UploadTransactionsPreviewComponent;
  let fixture: ComponentFixture<UploadTransactionsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTransactionsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTransactionsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
