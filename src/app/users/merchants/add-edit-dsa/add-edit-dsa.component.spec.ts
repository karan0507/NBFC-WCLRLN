import { DragDropModule } from '@angular/cdk/drag-drop';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditDsaComponent } from './add-edit-dsa.component';

describe('AddEditDsaComponent', () => {
  let component: AddEditDsaComponent;
  let fixture: ComponentFixture<AddEditDsaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDsaComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
