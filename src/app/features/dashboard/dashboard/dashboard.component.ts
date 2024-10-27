import { Component } from '@angular/core';
import { SpinnerStore } from 'src/app/core/stores/spinner.store.service'; // Usa la instancia en core

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private spinnerStore: SpinnerStore) {}

  spinnerToggle() {
    this.spinnerStore.toggleLoading(); // Cambia el estado global
  }
}