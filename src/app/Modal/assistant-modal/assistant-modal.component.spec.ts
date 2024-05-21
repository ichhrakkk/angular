import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantModalComponent } from './assistant-modal.component';

describe('AssistantModalComponent', () => {
  let component: AssistantModalComponent;
  let fixture: ComponentFixture<AssistantModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistantModalComponent]
    });
    fixture = TestBed.createComponent(AssistantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
