import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-tabla-products',
  templateUrl: './tabla-products.component.html',
  styleUrls: ['./tabla-products.component.scss']
})
export class TablaProductsComponent {

  public  productos: IProduct[] = [];

  constructor() {

  this.productos = [
    {
      id: 1,
      name: 'Cerveza',
      price: 120,
      stock: 10,
      description: 'Cerveza lata',
      category: 'Bebidas',
      image: ''
    },
    {
      id: 2,
      name: 'Papas',
      price: 300,
      stock: 5,
      description: 'Papas fritas',
      category: 'Comida',
      image: ''
    },
    {
      id: 3,
      name: 'Galletas',
      price: 200,
      stock: 15,
      description: 'Galletas de chocolate',
      category: 'Comida',
      image: ''
    },
    {
      id: 4,
      name: 'Coca Cola',
      price: 200,
      stock: 20,
      description: 'Coca Cola 2L',
      category: 'Bebidas',
      image: ''
    }
  ];
  }
}
