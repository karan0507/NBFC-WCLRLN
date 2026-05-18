import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaListComponent } from './dsa-list.component';

describe('DsaListComponent', () => {
  let component: DsaListComponent;
  let fixture: ComponentFixture<DsaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
