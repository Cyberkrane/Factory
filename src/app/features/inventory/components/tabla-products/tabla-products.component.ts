import { Component, OnInit } from '@angular/core';
import { ProductsStore } from '../../stores/products.store.service';
import { SpinnerStore } from 'src/app/core/stores/spinner.store.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-tabla-products',
  templateUrl: './tabla-products.component.html',
  styleUrls: ['./tabla-products.component.scss']
})
export class TablaProductsComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'price', 'stock', 'description', 'category'];
  public dataSource$ = this.productsStore.products$;

  constructor(
      private readonly productsStore: ProductsStore,
      private readonly spinnerStore: SpinnerStore
  ) {}

  ngOnInit(): void {
    this.showAllProducts();
  }

  showAllProducts() {
    this.spinnerStore.setLoading(true);

    timer(1500).subscribe(() => {
      this.spinnerStore.setLoading(false);
      this.productsStore.loadProducts();  // Llama al efecto en el store para cargar los productos
    });
  }
}
