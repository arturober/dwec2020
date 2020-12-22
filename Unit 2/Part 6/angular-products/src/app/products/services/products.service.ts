import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, retry } from 'rxjs/operators';
import { Product } from '../interfaces/product';
import { ProductsResponse, ProductResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly URL = 'products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductsResponse>(this.URL).pipe(
      map(resp => resp.products),
      catchError((error: HttpErrorResponse) => {
        return throwError(`Error getting products. Status: ${error.status}. Message: ${error.message}`);
      })
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<ProductResponse>(`${this.URL}/${id}`).pipe(
      map(resp => resp.product)
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<ProductResponse>(this.URL, product).pipe(
      map(resp => resp.product)
    );
  }

  changeRating(idProd: number, rating: number): Observable<void> {
    return this.http.put<void>(`${this.URL}/${idProd}/rating`, {rating});
  }
}
