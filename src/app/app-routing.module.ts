import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaProductosComponent} from './lista-productos/lista-productos.component';
import {DescuentosComponent} from './descuentos/descuentos.component';

const routes: Routes = [
  {path: "", component: ListaProductosComponent},
  {path: "productos", component: ListaProductosComponent},
  {path: "descuentos", component: DescuentosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
