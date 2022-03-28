import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDocumentActionsComponent } from './common-document-actions.component';

describe('CommonDocumentActionsComponent', () => {
  let component: CommonDocumentActionsComponent;
  let fixture: ComponentFixture<CommonDocumentActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonDocumentActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDocumentActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
