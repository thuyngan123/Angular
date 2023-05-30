import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProducsComponent } from './edit-producs.component';

describe('EditProducsComponent', () => {
  let component: EditProducsComponent;
  let fixture: ComponentFixture<EditProducsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProducsComponent]
    });
    fixture = TestBed.createComponent(EditProducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
