import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { Comment } from '../interfaces/comment.interface';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly BASE_URL = 'products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<{products: Product[]}>(this.BASE_URL)
      .pipe(map(resp => resp.products.map(p => {
        p.imageUrl = environment.baseUrl + '/' + p.imageUrl;
        return p;
      })));
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<{product: Product}>(`${this.BASE_URL}/${id}`)
      .pipe(
        map(resp => {
          const p = resp.product;
          p.imageUrl = environment.baseUrl + '/' + p.imageUrl;
          p.creator.avatar = environment.baseUrl + '/' + p.creator.avatar;
          return p;
        })
      );
  }

  changeRating(id: number, rating: number): Observable<number> {
    return this.http.put<{rating: number}>(`${this.BASE_URL}/${id}/rating`, {rating})
      .pipe(map(resp => resp.rating));
  }

  addProduct(prod: Product): Observable<Product> {
    return this.http.post<{product: Product}>(this.BASE_URL, prod)
      .pipe(map(resp => {
        const p = resp.product;
        p.imageUrl = environment.baseUrl + '/' + p.imageUrl;
        return p;
      }));
  }

  deleteProduct(idProd): Observable<void> {
    return this.http.delete(`${this.BASE_URL}/${idProd}`).pipe(map(() => null));
  }

  addComment(idProd: number, comment: string): Observable<Comment> {
    return this.http.post<{comment: Comment}>(`${this.BASE_URL}/${idProd}/comments`, {text: comment}).pipe(
      map(resp => {
        resp.comment.user.avatar = environment.baseUrl + '/' + resp.comment.user.avatar;
        return resp.comment;
      })
    );
  }

  getComments(idProd): Observable<Comment[]> {
    return this.http.get<{comments: Comment[]}>(`${this.BASE_URL}/${idProd}/comments`).pipe(
      map(resp => resp.comments.map(c => {
        c.user.avatar = environment.baseUrl + '/' + c.user.avatar;
        return c;
      }))
    );
  }
}
