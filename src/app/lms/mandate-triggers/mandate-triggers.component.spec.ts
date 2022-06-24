import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateTriggersComponent } from './mandate-triggers.component';

describe('MandateTriggersComponent', () => {
  let component: MandateTriggersComponent;
  let fixture: ComponentFixture<MandateTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandateTriggersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
