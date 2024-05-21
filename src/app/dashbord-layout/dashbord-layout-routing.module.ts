import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FaqComponent } from '../modules/pages/pages/faq/faq.component';
import { LoginComponent } from '../modules/pages/pages/login/login.component';
import { RegisterComponent } from '../modules/pages/pages/register/register.component';
import { MissingComponent } from '../modules/pages/pages/missing/missing.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
     {
      path: '', 
      loadChildren: () => import('../modules/pages/pages/pages.module').then(m => m.PagesModule)
     },
     //   { path: '', pathMatch: 'full', redirectTo: 'main' },

      ]

     } , 

  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordLayoutRoutingModule { }
