import { Component } from '@angular/core';
import { SpinnerStore } from 'src/app/core/stores/spinner.store.service'; // Usa la instancia en core

@Component({
  selector: 'app-spinner',
  // template: `<div *ngIf="isLoading$ | async" class="spinner">Loading...</div>`,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  isLoading$ = this.spinnerStore.isLoading$;

  constructor(private spinnerStore: SpinnerStore) {}
}
