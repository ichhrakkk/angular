import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetailsLeftSidebarComponent } from './courses-details-left-sidebar.component';

describe('CoursesDetailsLeftSidebarComponent', () => {
  let component: CoursesDetailsLeftSidebarComponent;
  let fixture: ComponentFixture<CoursesDetailsLeftSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetailsLeftSidebarComponent]
    });
    fixture = TestBed.createComponent(CoursesDetailsLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
