import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPartnersComponent } from './master-partners.component';

describe('MasterPartnersComponent', () => {
  let component: MasterPartnersComponent;
  let fixture: ComponentFixture<MasterPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
