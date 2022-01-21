import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationRulesComponent } from './authorization-rules.component';

describe('AuthorizationRulesComponent', () => {
  let component: AuthorizationRulesComponent;
  let fixture: ComponentFixture<AuthorizationRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
