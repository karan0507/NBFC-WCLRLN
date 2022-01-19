import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationMccCodeComponent } from './authorization-mcc-code.component';

describe('AuthorizationMccCodeComponent', () => {
  let component: AuthorizationMccCodeComponent;
  let fixture: ComponentFixture<AuthorizationMccCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationMccCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationMccCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
