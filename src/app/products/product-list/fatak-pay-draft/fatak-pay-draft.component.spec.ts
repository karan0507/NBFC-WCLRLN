import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatakPayDraftComponent } from './fatak-pay-draft.component';

describe('FatakPayDraftComponent', () => {
  let component: FatakPayDraftComponent;
  let fixture: ComponentFixture<FatakPayDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatakPayDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatakPayDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
