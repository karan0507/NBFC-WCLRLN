import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBoxTestingComponent } from './black-box-testing.component';

describe('BlackBoxTestingComponent', () => {
  let component: BlackBoxTestingComponent;
  let fixture: ComponentFixture<BlackBoxTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackBoxTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackBoxTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
