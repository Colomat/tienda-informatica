import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaProductosComponent} from './lista-productos/lista-productos.component';

const routes: Routes = [
  {path: "", component: ListaProductosComponent},
  {path: "productos", component: ListaProductosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
