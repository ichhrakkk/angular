import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBlogsRoutingModule } from './all-blogs-routing.module';
import { BlogGridComponent } from './blog/blog-grid/blog-grid.component';
import { BlogLeftSidebarComponent } from './blog/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './blog/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogDetailsLeftSidebarComponent } from './blog-details/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './blog-details/blog-details-right-sidebar/blog-details-right-sidebar.component';


@NgModule({
  declarations: [
    
    BlogGridComponent,
    BlogLeftSidebarComponent,
    BlogRightSidebarComponent,
    BlogDetailsComponent,
    BlogDetailsLeftSidebarComponent,
    BlogDetailsRightSidebarComponent
  ],
  imports: [
    CommonModule,
    AllBlogsRoutingModule
  ]
})
export class AllBlogsModule { }
