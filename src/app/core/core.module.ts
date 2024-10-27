import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerStore } from './stores/spinner.store.service'; // Mueve el SpinnerStore a core/services

@NgModule({
  imports: [CommonModule],
  providers: [SpinnerStore], // Proveedor global de SpinnerStore
})
export class CoreModule {}
