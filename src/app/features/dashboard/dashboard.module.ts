import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventoryModule } from '../inventory/inventory.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InventoryModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [],
})
export class DashboardModule { }
