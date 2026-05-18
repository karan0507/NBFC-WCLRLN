import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBlockUnblockComponent } from './account-block-unblock.component';

describe('AccountBlockUnblockComponent', () => {
  let component: AccountBlockUnblockComponent;
  let fixture: ComponentFixture<AccountBlockUnblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBlockUnblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBlockUnblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
