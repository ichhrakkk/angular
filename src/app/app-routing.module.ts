import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MissingComponent } from './modules/pages/pages/missing/missing.component';
import { CustomHeaderLayoutComponent } from './custom-layout/custom-header-layout/custom-header-layout.component';

const routes: Routes = [

//home PATH 
  {
    path: 'home',
    title: '',
    loadChildren: () =>
      import('./showcase-layout/showcase-layout.module').then((m) => m.ShowcaseLayoutModule),
  },

     { path: '', pathMatch: 'full', redirectTo: 'home' },  

//about path 

     {
      path: '',
      title: '',
      loadChildren: () =>
        import('./showcase-layout/showcase-layout.module').then((m) => m.ShowcaseLayoutModule),

    },

  
       

  //all-courses path

       {
        path: '',
        title: '',
        loadChildren: () =>
          import('./showcase-layout/showcase-layout.module').then((m) => m.ShowcaseLayoutModule),
       },
    
    

// pages path (dashbord-layout)

     {
      path: '',
      title: '',
      loadChildren: () =>
        import('./dashbord-layout/dashbord-layout.module').then((m) => m.DashbordLayoutModule),
    },
   


    // pages path (custom-layout)

    {
      path: '',
      title: '',
      loadChildren: () =>
        import('./custom-layout/custom-layout.module').then((m) => m.CustomLayoutModule),
    },
    
// blog path
    {
      path: '',
      title: '',
      loadChildren: () =>
        import('./showcase-layout/showcase-layout.module').then((m) => m.ShowcaseLayoutModule),
    },

//contact path
    {
      path: '',
      title: '',
      loadChildren: () =>
        import('./showcase-layout/showcase-layout.module').then((m) => m.ShowcaseLayoutModule),
    },
    {
      path: '**',
      component: CustomHeaderLayoutComponent, // Utilisez le même layout que les autres pages
      children: [
        {
          path: '',
          component: MissingComponent, // Composant 404-error
        }
      ]
    }

]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule {}