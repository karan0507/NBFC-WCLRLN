import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackDataComponent } from './cashback-data.component';

describe('CashbackDataComponent', () => {
  let component: CashbackDataComponent;
  let fixture: ComponentFixture<CashbackDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashbackDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
