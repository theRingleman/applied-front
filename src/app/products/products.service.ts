import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiServer = 'http://localhost:8080/products';

  constructor(private httpClient: HttpClient) { }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer, product);
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/' + id);
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/' + id, product);
  }

  delete(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.apiServer + '/' + id);
  }

  errorHandler(error: Error): Observable<never> {
    console.log(error.message);
    return throwError(error.message);
  }
}
