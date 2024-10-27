import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductsComponent } from './tabla-products.component';

describe('TablaProductsComponent', () => {
  let component: TablaProductsComponent;
  let fixture: ComponentFixture<TablaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
