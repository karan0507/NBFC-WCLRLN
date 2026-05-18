import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCibilSmsComponent } from './common-cibil-sms.component';

describe('CommonCibilSmsComponent', () => {
  let component: CommonCibilSmsComponent;
  let fixture: ComponentFixture<CommonCibilSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonCibilSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCibilSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
