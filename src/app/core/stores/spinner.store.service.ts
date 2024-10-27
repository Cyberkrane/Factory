import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface SpinnerState {
  isLoading: boolean;
}

@Injectable()
export class SpinnerStore extends ComponentStore<SpinnerState> {
  constructor() {
    super({ isLoading: false }); // Estado inicial
  }

  // Selector para obtener el estado del spinner
  readonly isLoading$ = this.select(state => {
    return state.isLoading
  });

  // Actualizador para cambiar el estado del spinner
  readonly setLoading = this.updater((state, isLoading: boolean) => ({
    ...state,
    isLoading,
  }));

  // Método para alternar el estado del spinner
  readonly toggleLoading = this.updater((state) => ({
    ...state,
    isLoading: !state.isLoading,
  }));
}
