import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbfcsComponent } from './nbfcs.component';

describe('NbfcsComponent', () => {
  let component: NbfcsComponent;
  let fixture: ComponentFixture<NbfcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbfcsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbfcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
