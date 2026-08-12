import { Subscription } from 'rxjs';
import { ProductData } from '../../interfaces/productsAPI/products-api.interface';
import { ProductsService } from './../../services/products.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-api',
  imports: [],
  templateUrl: './products-api.component.html',
  styleUrl: './products-api.component.css',
})
export class ProductsAPIComponent implements OnInit, OnDestroy {
  private readonly productsDataAPI = inject(ProductsService);

  ProductData: ProductData = [];

  refProductsSub$!: Subscription;

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.refProductsSub$.unsubscribe();
    console.log('Products Data Was Deleted');
  }

  getAllProducts() {
    this.refProductsSub$ = this.productsDataAPI.getAllProducts().subscribe({
      next: (response) => {
        this.ProductData = response;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('All Data Rendered Successfully');
      },
    });
  }
}
