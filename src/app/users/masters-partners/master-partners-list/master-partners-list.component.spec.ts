import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPartnersListComponent } from './master-partners-list.component';

describe('MasterPartnersListComponent', () => {
  let component: MasterPartnersListComponent;
  let fixture: ComponentFixture<MasterPartnersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPartnersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPartnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
