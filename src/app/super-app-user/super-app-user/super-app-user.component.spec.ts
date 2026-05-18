import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAppUserComponent } from './super-app-user.component';

describe('SuperAppUserComponent', () => {
  let component: SuperAppUserComponent;
  let fixture: ComponentFixture<SuperAppUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAppUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAppUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
