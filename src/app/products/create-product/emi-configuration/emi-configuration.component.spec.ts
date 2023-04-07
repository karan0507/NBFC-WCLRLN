import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiConfigurationComponent } from './emi-configuration.component';

describe('EmiConfigurationComponent', () => {
  let component: EmiConfigurationComponent;
  let fixture: ComponentFixture<EmiConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
