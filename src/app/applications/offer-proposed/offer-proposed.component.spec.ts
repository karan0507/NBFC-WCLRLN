import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferProposedComponent } from './offer-proposed.component';

describe('OfferProposedComponent', () => {
  let component: OfferProposedComponent;
  let fixture: ComponentFixture<OfferProposedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferProposedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferProposedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
