import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDownloadsComponent } from './app-downloads.component';

describe('AppDownloadsComponent', () => {
  let component: AppDownloadsComponent;
  let fixture: ComponentFixture<AppDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDownloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
