import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersPartnersComponent } from './masters-partners.component';

describe('MastersPartnersComponent', () => {
  let component: MastersPartnersComponent;
  let fixture: ComponentFixture<MastersPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastersPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
