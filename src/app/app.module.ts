import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './modules/pages/pages.component';
import { FormsModule } from '@angular/forms';
import { PatientModalComponent } from './Modal/patient-modal/patient-modal.component';
import { DoctorModalComponent } from './Modal/doctor-modal/doctor-modal.component';
import { AssistantModalComponent } from './Modal/assistant-modal/assistant-modal.component';
import { AdminModalComponent } from './Modal/admin-modal/admin-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PatientModalComponent,
    DoctorModalComponent,
    AssistantModalComponent,
    AdminModalComponent,
   
    
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // Ajout de HttpClientModule dans les imports

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
