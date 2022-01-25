import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTerminateUnblockComponent } from './user-terminate-unblock.component';

describe('UserTerminateUnblockComponent', () => {
  let component: UserTerminateUnblockComponent;
  let fixture: ComponentFixture<UserTerminateUnblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTerminateUnblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTerminateUnblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
