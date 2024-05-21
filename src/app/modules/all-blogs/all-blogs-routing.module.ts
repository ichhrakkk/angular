import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridComponent } from './blog/blog-grid/blog-grid.component';
import { BlogLeftSidebarComponent } from './blog/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './blog/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './blog-details/blog-details-right-sidebar/blog-details-right-sidebar.component';
import { BlogDetailsLeftSidebarComponent } from './blog-details/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { MissingComponent } from '../pages/pages/missing/missing.component';

const routes: Routes = [
  {
    path: 'blog' ,
    children: [
   { path: 'blog-grid' ,component: BlogGridComponent },
   { path: 'blog-left-sidebar' , component: BlogLeftSidebarComponent },
   { path: 'blog-right-sidebar' , component: BlogRightSidebarComponent },
  ]
 },
 
  { 
    path : 'blog-details',
    children : [
   { path: 'blog-details-left-sidebar' , component: BlogDetailsLeftSidebarComponent },
   { path: 'blog-details-right-sidebar' , component: BlogDetailsRightSidebarComponent }
 
    ],
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllBlogsRoutingModule { }
