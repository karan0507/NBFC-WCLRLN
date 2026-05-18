import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmhComponent } from './lmh.component';

describe('LmhComponent', () => {
  let component: LmhComponent;
  let fixture: ComponentFixture<LmhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
