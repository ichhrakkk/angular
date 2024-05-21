import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesDetailsLeftSidebarComponent } from './courses-details/courses-details-left-sidebar/courses-details-left-sidebar.component';
import { CoursesDetailsRightSidebarComponent } from './courses-details/courses-details-right-sidebar/courses-details-right-sidebar.component';
import { MissingComponent } from '../../pages/pages/missing/missing.component';

const routes: Routes = [
  {
   path: 'all-courses' ,
   children: [
  { path: 'courses' ,component: CoursesComponent },
  { path: 'my-courses' , component: MyCoursesComponent },

   ],
  },

   { 
    path: 'courses-details' , 
    children : [
   // { path: 'courses-details',component: CoursesDetailsComponent },
  { path: 'courses-details-left-sidebar' , component: CoursesDetailsLeftSidebarComponent },
  { path: 'courses-details-right-sidebar' , component: CoursesDetailsRightSidebarComponent }

   ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCoursesRoutingModule { }
