import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiUrl = 'http://localhost:3000/Products';

  constructor(private readonly httpService: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpService.get<IProduct[]>(this.apiUrl);
  }

}
