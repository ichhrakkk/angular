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
      loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)
    },
     { path: '', pathMatch: 'full', redirectTo: 'main' },

  //about path

     {
      path: '', 
      loadChildren: () => import('../modules/about/about.module').then(m => m.AboutModule)

     },


  // all-courses path 

   {
    path: '', 
    loadChildren: () => import('../modules/all-courses/all-courses/all-courses.module').then(m => m.AllCoursesModule)

  },


  // all-blogs path

  {
    path: '', 
    loadChildren: () => import('../modules/all-blogs/all-blogs.module').then(m => m.AllBlogsModule)

  },
//contact path
  {
    path: '', 
    loadChildren: () => import('../modules/contact/contact.module').then(m => m.ContactModule)
  },

  ]
},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseLayoutRoutingModule { }