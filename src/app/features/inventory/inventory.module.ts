import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { TablaProductsComponent } from './components/tabla-products/tabla-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsStore } from './stores/products.store.service';


@NgModule({
  declarations: [
    InventoryComponent,
    TablaProductsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ],
  providers: [ProductsStore],
})
export class InventoryModule { }
