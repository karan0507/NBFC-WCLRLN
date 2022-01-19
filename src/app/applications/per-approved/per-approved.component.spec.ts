import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerApprovedComponent } from './per-approved.component';

describe('PerApprovedComponent', () => {
  let component: PerApprovedComponent;
  let fixture: ComponentFixture<PerApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
