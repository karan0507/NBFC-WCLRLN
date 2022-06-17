import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormantStageComponent } from './dormant-stage.component';

describe('DormantStageComponent', () => {
  let component: DormantStageComponent;
  let fixture: ComponentFixture<DormantStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DormantStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DormantStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
