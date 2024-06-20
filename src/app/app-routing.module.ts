import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1/c1.component';
import { C2Component } from './c2/c2/c2.component';

const routes: Routes = [
  {path: 'componente1', component: C1Component,
    loadChildren: () =>
    import('./c1/c1.module').then((m) => m.C1Module)
    },
    {path: 'componente2', component: C2Component,
      loadChildren: () =>
      import('./c2/c2.module').then((m) => m.C2Module)
      },
      {path: '**', redirectTo: 'componente1', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
