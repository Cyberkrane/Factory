// src/app/core/stores/spinner.store.ts
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface SpinnerState {
  isLoading: boolean;
}

@Injectable()
export class SpinnerStore extends ComponentStore<SpinnerState> {
  // Estado inicial
  constructor() {
    super({ isLoading: false });
  }

  // Selector para observar el estado de carga
  readonly isLoading$ = this.select((state) => state.isLoading);

  // Actualizador para mostrar el spinner
  readonly showSpinner = this.updater((state) => ({
    ...state,
    isLoading: true,
  }));

  // Actualizador para ocultar el spinner
  readonly hideSpinner = this.updater((state) => ({
    ...state,
    isLoading: false,
  }));
}
