import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllBillsComponent } from './show-all-bills.component';

describe('ShowAllBillsComponent', () => {
  let component: ShowAllBillsComponent;
  let fixture: ComponentFixture<ShowAllBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
