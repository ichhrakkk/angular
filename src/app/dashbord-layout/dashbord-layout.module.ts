import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordLayoutRoutingModule } from './dashbord-layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashbordLayoutRoutingModule
  ]
})
export class DashbordLayoutModule { }
