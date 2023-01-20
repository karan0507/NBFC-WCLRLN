import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmhRulesComponent } from './lmh-rules.component';

describe('LmhRulesComponent', () => {
  let component: LmhRulesComponent;
  let fixture: ComponentFixture<LmhRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmhRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmhRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
