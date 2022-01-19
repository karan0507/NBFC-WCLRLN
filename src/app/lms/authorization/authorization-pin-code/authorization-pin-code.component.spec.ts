import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationPinCodeComponent } from './authorization-pin-code.component';

describe('AuthorizationPinCodeComponent', () => {
  let component: AuthorizationPinCodeComponent;
  let fixture: ComponentFixture<AuthorizationPinCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationPinCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationPinCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
