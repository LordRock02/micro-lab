import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;

    // 👇 AQUÍ ESTÁ EL TRUCO: Le damos datos falsos antes de detectar cambios
    component.product = {
      id: 1,
      name: 'Producto de Prueba',
      price: 99.99,
      description: 'Descripción de prueba',
      image: 'https://via.placeholder.com/150'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});