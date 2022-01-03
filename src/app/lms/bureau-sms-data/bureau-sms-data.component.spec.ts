import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauSmsDataComponent } from './bureau-sms-data.component';

describe('BureauSmsDataComponent', () => {
  let component: BureauSmsDataComponent;
  let fixture: ComponentFixture<BureauSmsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauSmsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BureauSmsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
