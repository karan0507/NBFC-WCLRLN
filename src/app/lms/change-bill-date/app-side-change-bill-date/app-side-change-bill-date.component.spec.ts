import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideChangeBillDateComponent } from './app-side-change-bill-date.component';

describe('AppSideChangeBillDateComponent', () => {
  let component: AppSideChangeBillDateComponent;
  let fixture: ComponentFixture<AppSideChangeBillDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSideChangeBillDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSideChangeBillDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
