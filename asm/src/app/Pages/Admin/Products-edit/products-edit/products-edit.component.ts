import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interface/Products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent {
  products: IProduct = {
    name: "",
    price: 0,
  }
  constructor(private productService: ProductsService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.products = product
      })
    })
  }
  onHandleSubmit() {
    this.productService.updateProducts(this.products).subscribe(product => {
      console.log(product);

    })
  }

}
