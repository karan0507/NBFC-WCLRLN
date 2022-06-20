import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateStageComponent } from './corporate-stage.component';

describe('CorporateStageComponent', () => {
  let component: CorporateStageComponent;
  let fixture: ComponentFixture<CorporateStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
