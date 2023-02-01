import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineEmiComponent } from './offline-emi.component';

describe('OfflineEmiComponent', () => {
  let component: OfflineEmiComponent;
  let fixture: ComponentFixture<OfflineEmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineEmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineEmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
