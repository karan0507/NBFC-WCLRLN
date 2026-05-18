import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENachSigningComponent } from './e-nach-signing.component';

describe('ENachSigningComponent', () => {
  let component: ENachSigningComponent;
  let fixture: ComponentFixture<ENachSigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ENachSigningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ENachSigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
