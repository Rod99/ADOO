import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AgregaProductoComponent} from './agrega-producto/agrega-producto.component';
import {EstadisticasComponent} from './estadisticas/estadisticas.component';
import {ModificaProductoComponent} from './modifica-producto/modifica-producto.component';
import {ReportesComponent} from './reportes/reportes.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'agregarProducto', component: AgregaProductoComponent
  },
  {
    path: 'estadisticas', component: EstadisticasComponent
  },
  {
    path: 'home', component: LoginComponent
  },
  {
    path: 'modificarProducto', component: ModificaProductoComponent
  },
  {
    path: 'reportes', component: ReportesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
