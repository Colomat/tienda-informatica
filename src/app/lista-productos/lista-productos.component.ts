import { Component } from '@angular/core';
import { Producto } from '../products';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent{ // ListaProductosComponent implements Producto no me deja implementar
  products: Producto[] = [  /*products es el nombre de la lista*/
    { id: 1, nombre: 'Notebook', precio: 100, descuento: 20},
    { id: 2, nombre: 'Mouse gamer', precio: 200, descuento:50},
    { id: 3, nombre: 'Parlante JVC', precio: 150, descuento:70},
    { id: 3, nombre: 'teclado', precio: 150, descuento:20},

  ];


  idInput:number;
  nombreInput:string = '';
  precioInput:number;
  descuentoInput:number;

  listaDesc:any[] = [ 

  ];
  

  calcularDescuento(){
    for(let i=0; i<5; i++){
      if(this.products[i].descuento == 20){
        this.listaDesc.push(this.products[i].id,this.products[i].nombre,this.products[i].precio,this.products[i].descuento,);
      }
    }
    
  }

  
  calcularDescuento2(){
    for(let i=0; i<5; i++){
      if(this.products[i].descuento == 50){
        this.listaDesc.push(this.products[i].id,this.products[i].nombre,this.products[i].precio,this.products[i].descuento,);
      }
    }
  }


  calcularDescuento3(){
    for(let i=0; i<5; i++){
      if(this.products[i].descuento == 70){
        this.listaDesc.push(this.products[i].id,this.products[i].nombre,this.products[i].precio,this.products[i].descuento,);
      }
    }
  }

 

  

  //Metodo para agregar producto. Antes a producto lo tenia como una interface pero no me deja trabajar sino es una clase
  agregarProducto(){
     let producto1 = new Producto(this.idInput, this.nombreInput, this.precioInput, this.descuentoInput);
     this.products.push(producto1);
  } 

  
}
