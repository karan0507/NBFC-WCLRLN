import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTransactionsListComponent } from './upload-transactions-list.component';

describe('UploadTransactionsListComponent', () => {
  let component: UploadTransactionsListComponent;
  let fixture: ComponentFixture<UploadTransactionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTransactionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
