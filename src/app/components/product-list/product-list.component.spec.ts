import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
