import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbpsCategoryComponent } from './bbps-category.component';

describe('BbpsCategoryComponent', () => {
  let component: BbpsCategoryComponent;
  let fixture: ComponentFixture<BbpsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbpsCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbpsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
