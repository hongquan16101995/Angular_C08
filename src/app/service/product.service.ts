import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  id: number = 1;
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  formP(product: Product) {
    if (product.id == null) {
      product.id = this.id
      this.products.push(product)
      this.id++
    } else {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == product.id) {
          this.products[i] = product;
        }
      }
    }
  }

  getById(id: number | string): Product | null {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i];
      }
    }
    return null
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products.splice(i, 1);
      }
    }
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:8080/product", product)
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:8080/product")
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/product/" + id)
  }
}
