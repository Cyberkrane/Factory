import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  exports: [
    InventoryComponent
  ]
})
export class InventoryModule { }
