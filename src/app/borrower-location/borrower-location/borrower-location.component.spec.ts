import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerLocationComponent } from './borrower-location.component';

describe('BorrowerLocationComponent', () => {
  let component: BorrowerLocationComponent;
  let fixture: ComponentFixture<BorrowerLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
