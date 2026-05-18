import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbpsBillersComponent } from './bbps-billers.component';

describe('BbpsBillersComponent', () => {
  let component: BbpsBillersComponent;
  let fixture: ComponentFixture<BbpsBillersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbpsBillersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbpsBillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
