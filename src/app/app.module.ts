import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DescuentosComponent } from './descuentos/descuentos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    DescuentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
