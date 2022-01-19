import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationUpiIdComponent } from './authorization-upi-id.component';

describe('AuthorizationUpiIdComponent', () => {
  let component: AuthorizationUpiIdComponent;
  let fixture: ComponentFixture<AuthorizationUpiIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationUpiIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationUpiIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
