import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetailsRightSidebarComponent } from './courses-details-right-sidebar.component';

describe('CoursesDetailsRightSidebarComponent', () => {
  let component: CoursesDetailsRightSidebarComponent;
  let fixture: ComponentFixture<CoursesDetailsRightSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetailsRightSidebarComponent]
    });
    fixture = TestBed.createComponent(CoursesDetailsRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
