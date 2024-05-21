import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AfterEnrollComponent } from './after-enroll/after-enroll.component';
import { CoursesAdminComponent } from './courses-admin/courses-admin.component';
import { OverviewComponent } from './overview/overview.component';
import { StudentsComponent } from './students/students.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EngagementComponent } from './engagement/engagement.component';
import { TrafficConversionComponent } from './traffic-conversion/traffic-conversion.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { MissingComponent } from './missing/missing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AfterEnrollComponent,
    CoursesAdminComponent,
    OverviewComponent,
    StudentsComponent,
    ReviewsComponent,
    EngagementComponent,
    TrafficConversionComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    FaqComponent,
    MissingComponent,

    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
