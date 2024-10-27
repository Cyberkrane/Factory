import { TestBed } from '@angular/core/testing';

import { InventoryStore } from './Inventory.service';

describe('InventarioService', () => {
  let service: InventoryStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
