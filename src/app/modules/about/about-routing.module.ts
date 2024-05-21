import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { AboutComponent } from 'src/app/modules/about/about/about.component' ;
import { MissingComponent } from '../pages/pages/missing/missing.component';

const routes: Routes = [

  { path: 'about',
   component :AboutComponent ,
  },
  // Ajoutez d'autres routes spécifiques à la fonctionnalité "About" si nécessaire
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
