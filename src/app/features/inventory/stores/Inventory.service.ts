import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface InventoryState {
  productos: any[]; // Define aquí la estructura de tu estado
  // Agrega otras propiedades según sea necesario
}

@Injectable()
export class InventoryStore extends ComponentStore<InventoryState> {
  constructor() {
    super({ productos: [] }); // Define el estado inicial aquí
  }

  // Define aquí los efectos, selectores y actualizadores para el estado
}
