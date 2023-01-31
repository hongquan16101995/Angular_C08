import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formProduct!: FormGroup;
  products: Product[] = [];
  product!: Product | null;

  check: boolean = false;

  constructor(private formGroup: FormBuilder,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    document.getElementById("demo").hidden = true
    this.findAll()
    this.formProduct = this.formGroup.group({
      id: [''],
      name: [''],
      price: [''],
      quantity: [''],
      image: ['']
    });
  }

  formP() {
    const product = {
      id: this.formProduct?.value.id,
      name: this.formProduct?.value.name,
      price: this.formProduct?.value.price,
      quantity: this.formProduct?.value.quantity,
      image: this.formProduct?.value.image,
    };
    this.productService.formP(product);
    this.products = this.productService.products;
    this.formProduct.reset();
  }

  findAll() {
    this.productService.findAll().subscribe(data => {
      this.products = data
    })
  }

  create() {
    const product = {
      id: this.formProduct?.value.id,
      name: this.formProduct?.value.name,
      price: this.formProduct?.value.price,
      quantity: this.formProduct?.value.quantity,
      image: this.formProduct?.value.image
    }
    this.productService.create(product).subscribe(() => {
      this.findAll()
      this.formProduct.reset()
    })
  }

  editProduct(id: number) {
    this.product = this.productService.getById(id);
    if (this.product != null) {
      this.formProduct.patchValue(this.product)
    }
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
    this.products = this.productService.products;
  }

  deleteProductBe(id: number) {
    this.productService.deleteById(id).subscribe(data => {

      }, error => {
      this.findAll()
      console.log("Demo")
      }
    )

  }

  display() {
    // @ts-ignore
    document.getElementById("demo").hidden = false
  }
}
