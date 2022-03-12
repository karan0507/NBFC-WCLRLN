import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycDocumentActionComponent } from './kyc-document-action.component';

describe('KycDocumentActionComponent', () => {
  let component: KycDocumentActionComponent;
  let fixture: ComponentFixture<KycDocumentActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycDocumentActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycDocumentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
