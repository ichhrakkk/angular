import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCoursesRoutingModule } from './all-courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesDetailsLeftSidebarComponent } from './courses-details/courses-details-left-sidebar/courses-details-left-sidebar.component';
import { CoursesDetailsRightSidebarComponent } from './courses-details/courses-details-right-sidebar/courses-details-right-sidebar.component';


@NgModule({
  declarations: [
    CoursesComponent,
    MyCoursesComponent,
    CoursesDetailsComponent,
    CoursesDetailsLeftSidebarComponent,
    CoursesDetailsRightSidebarComponent
  ],
  imports: [
    CommonModule,
    AllCoursesRoutingModule
  ]
})
export class AllCoursesModule { }
