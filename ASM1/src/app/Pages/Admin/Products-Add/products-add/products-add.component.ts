import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Interface/Products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent {
  products: Iproduct = {
    name: "",
    price: 0,
    desc: "",
    images: ""
  }
  constructor(private productService: ProductsService) {

  }
  onHandleSubmit() {
    this.productService.addProducts(this.products).subscribe(product => {
      console.log(product)
    })
  }


}
