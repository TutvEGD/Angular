import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API:string ='https://60f067cd8970e90017405c18.mockapi.io/api/products'

  constructor(
    private http:HttpClient
  ) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.API)
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`)
  }

  addProduct(item:Product):Observable<Product>{
    return this.http.post<Product>(`${this.API}`,item)
  }
  removeProduct(id:number):Observable<Product>{
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
  updateProduct(product:Product): Observable <Product> {
    return this.http.put<Product>(`${this.API}/${product.id}`,product);
  }
}
