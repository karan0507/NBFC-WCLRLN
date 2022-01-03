import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackRewardsComponent } from './cashback-rewards.component';

describe('CashbackRewardsComponent', () => {
  let component: CashbackRewardsComponent;
  let fixture: ComponentFixture<CashbackRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashbackRewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
