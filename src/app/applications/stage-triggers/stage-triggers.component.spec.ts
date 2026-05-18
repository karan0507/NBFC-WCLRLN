import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageTriggersComponent } from './stage-triggers.component';

describe('StageTriggersComponent', () => {
  let component: StageTriggersComponent;
  let fixture: ComponentFixture<StageTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageTriggersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
