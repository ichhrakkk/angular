import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomLayoutRoutingModule } from './custom-layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomHeaderLayoutComponent } from './custom-header-layout/custom-header-layout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CustomHeaderLayoutComponent
  ],
  imports: [
    CommonModule,
    CustomLayoutRoutingModule
  ]
})
export class CustomLayoutModule { }
