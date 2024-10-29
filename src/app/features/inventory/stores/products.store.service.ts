// products.store.ts
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces/product.interface';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface ProductsState {
  products: IProduct[];
}

@Injectable()
export class ProductsStore extends ComponentStore<ProductsState> {
  constructor(private readonly productsService: ProductsService) {
    super({ products: [] }); // Estado inicial
  }

  // Selector para obtener productos
  readonly products$ = this.select((state) => state.products);

  // Actualizar el estado de productos
  readonly setProducts = this.updater((state, products: IProduct[]) => ({
    ...state,
    products,
  }));

  // Efecto para cargar productos desde el servicio
  readonly loadProducts = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      tap(() => {
        this.productsService.getAllProducts().subscribe({
          next: (products) => this.setProducts(products),
          error: (err) => console.error('Error al cargar productos:', err),
        });
      })
    )
  );
}
