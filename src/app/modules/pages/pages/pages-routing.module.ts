import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterEnrollComponent } from './after-enroll/after-enroll.component';
import { CoursesAdminComponent } from './courses-admin/courses-admin.component';
import { EngagementComponent } from './engagement/engagement.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { MissingComponent } from './missing/missing.component';
import { OverviewComponent } from './overview/overview.component';
import { RegisterComponent } from './register/register.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { StudentsComponent } from './students/students.component';
import { TrafficConversionComponent } from './traffic-conversion/traffic-conversion.component';

const routes: Routes = [
  {   path :  'pages', 
    children : [
  { path: 'after-enroll' ,component: AfterEnrollComponent },
  { path: 'courses-admin' , component: CoursesAdminComponent },
  { path: 'engagement' , component: EngagementComponent },
  { path: 'messages' , component: MessagesComponent },
  { path: 'overview' , component: OverviewComponent },
  { path: 'reviews' , component: ReviewsComponent },
  { path: 'students' , component: StudentsComponent },
  { path: 'traffic-conversion' , component: TrafficConversionComponent },
  


 ],

},

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
