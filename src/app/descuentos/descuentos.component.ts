import { Component } from '@angular/core';
import { Producto } from '../products';


@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent {
  products: Producto[] = [
    { id: 1, nombre: 'Notebook', precio: 100 - ( 100 * 20 /100)},
    { id: 2, nombre: 'Mouse gamer', precio: 200 - ( 100 * 20 /100)},
    { id: 3, nombre: 'Parlante JVC', precio: 150 - ( 100 * 20 /100)},
    { id: 4, nombre: 'Teclado mecánico', precio: 300 - ( 100 * 20 /100)},
  ];
}
