import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBlockUnblockComponent } from './line-block-unblock.component';

describe('LineBlockUnblockComponent', () => {
  let component: LineBlockUnblockComponent;
  let fixture: ComponentFixture<LineBlockUnblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineBlockUnblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBlockUnblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
