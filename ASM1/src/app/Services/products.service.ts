import { Injectable } from '@angular/core';
import { Iproduct } from '../Interface/Products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`http://localhost:3000/products`)

  }
  deleteProducts(id: number | string): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`http://localhost:3000/${id}`)
  }
  addProducts(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(`http://localhost:3000/products`, product)

  }
  // updateProduct(product: IProduct): Observable<IProduct> {
  //   return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product)
  // }
}
