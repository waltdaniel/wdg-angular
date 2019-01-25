import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //definicion de rutas y a qué apunta, ej un componente dentro de x modulo
  {
    path: '', //raiz
    redirectTo: 'homecomp', //redirecciona por defecto a..
    pathMatch: 'full'
  },
  {
    path: 'material-demo',
    component: MaterialDemoComponent,
  },
  {
    path: 'homecomp',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
