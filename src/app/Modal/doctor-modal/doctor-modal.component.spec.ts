import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorModalComponent } from './doctor-modal.component';

describe('DoctorModalComponent', () => {
  let component: DoctorModalComponent;
  let fixture: ComponentFixture<DoctorModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorModalComponent]
    });
    fixture = TestBed.createComponent(DoctorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
