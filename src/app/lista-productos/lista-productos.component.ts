import { Component } from '@angular/core';
import { Producto } from '../products';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent{ // ListaProductosComponent implements Producto no me deja implementar
  products: Producto[] = [  /*products es el nombre de la lista*/
    { id: 1, nombre: 'Notebook', precio: 100},
    { id: 2, nombre: 'Mouse gamer', precio: 200},
    { id: 3, nombre: 'Parlante JVC', precio: 150},
  ];


  idInput:number;
  nombreInput:string = '';
  precioInput:number;

  //Metodo para agregar producto. Antes a producto lo tenia como una interface pero no me deja trabajar sino es una clase
  agregarProducto(){
     let producto1 = new Producto(this.idInput, this.nombreInput, this.precioInput);
     this.products.push(producto1);
  } 
}
