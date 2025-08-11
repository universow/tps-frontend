import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../models/product-model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

     constructor(private HttpClient: HttpClient){

  }

  getProducts(): Observable<ProductModel[]>{
    return this.HttpClient.get<ProductModel[]>('http://localhost:9001/api/v1/product'+ '/List').pipe(map(res => res));
  }
  saveProduct(request: any): Observable<any>{
    return this.HttpClient.post<any>('http://localhost:9001/api/v1/product'+ '/save', request).pipe(map(res => res));
  }
  updateProduct(request: any): Observable<any>{
    return this.HttpClient.post<any>('http://localhost:9001/api/v1/product'+ '/update', request).pipe(map(res => res));
  }
  deleteProduct(codigo: number): Observable<any>{
    return this.HttpClient.get<any>('http://localhost:9001/api/v1/product'+ '/delete/'+ codigo).pipe(map(res => res));
  }
  
}
