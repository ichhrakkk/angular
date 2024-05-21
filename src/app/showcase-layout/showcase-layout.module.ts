import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseLayoutRoutingModule } from './showcase-layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ShowcaseLayoutRoutingModule
  ]
})
export class ShowcaseLayoutModule { }
