import { Injectable } from '@angular/core';
import { IProduct } from '../Interface/Products';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("http://localhost:3000/products")
  }
  deleteProducts(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`)
  }
  addProducts(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>("http://localhost:3000/products", product)
  }
  updateProducts(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product)
  }
  getProductById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)

  }
}
