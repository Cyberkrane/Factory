import { TestBed } from '@angular/core/testing';

import { InventoryStore } from './Inventory.store.service';

describe('InventarioStore', () => {
  let service: InventoryStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
