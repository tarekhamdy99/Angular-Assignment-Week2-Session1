import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from '../interfaces/productsAPI/products-api.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly httpClient = inject(HttpClient);

  getAllProducts(): Observable<ProductData> {
    return this.httpClient.get<ProductData>('https://fakestoreapi.com/products');
  }
}
