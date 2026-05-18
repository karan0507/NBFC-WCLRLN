import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyApiCallComponent } from './third-party-api-call.component';

describe('ThirdPartyApiCallComponent', () => {
  let component: ThirdPartyApiCallComponent;
  let fixture: ComponentFixture<ThirdPartyApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyApiCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
