import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbpsComplaintsComponent } from './bbps-complaints.component';

describe('BbpsComplaintsComponent', () => {
  let component: BbpsComplaintsComponent;
  let fixture: ComponentFixture<BbpsComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbpsComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbpsComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
