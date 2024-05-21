import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../modules/pages/pages/login/login.component';
import { RegisterComponent } from '../modules/pages/pages/register/register.component';
import { MissingComponent } from '../modules/pages/pages/missing/missing.component';
import { FaqComponent } from '../modules/pages/pages/faq/faq.component';
import { CustomHeaderLayoutComponent } from './custom-header-layout/custom-header-layout.component';




const routes: Routes = [
  {
    path: 'pages', 
    component: CustomHeaderLayoutComponent ,
    children : [
      { path: 'login' , component: LoginComponent },
      { path: 'register' , component: RegisterComponent },
      { path: '404-error' , component: MissingComponent },
      { path: 'faq' , component: FaqComponent },
      { path: '**', redirectTo: 'pages/register' }
    ],
  
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomLayoutRoutingModule { }
