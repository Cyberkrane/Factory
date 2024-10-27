import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { timer } from 'rxjs';
import { SpinnerStore } from 'src/app/core/stores/spinner.store.service';


@Component({
  selector: 'app-tabla-products',
  templateUrl: './tabla-products.component.html',
  styleUrls: ['./tabla-products.component.scss']
})
export class TablaProductsComponent implements OnInit {

  public ELEMENT_DATA: IProduct[] = [];
  public displayedColumns: string[] = ['name','price','stock','description','category'];
  public dataSource = this.ELEMENT_DATA;

  constructor(
      private readonly productsService: ProductsService,
      private readonly spinnerStore: SpinnerStore
    ) {}

  ngOnInit(): void {
    this.showAllProducts();
  }

  showAllProducts() {

    this.spinnerStore.setLoading(true);

    timer(1500).subscribe(() => {
      this.spinnerStore.setLoading(false);
      this.productsService.getAllProducts().subscribe(products => {
      this.dataSource = products
    })
    })
    
  }

}
