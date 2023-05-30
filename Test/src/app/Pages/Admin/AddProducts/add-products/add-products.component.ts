import { Component } from '@angular/core';
import { IProduct } from 'src/app/Interface/Products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent {
  products: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductsService) {

  }
  onHandleSubmit() {
    this.productService.addProducts(this.products).subscribe(products => {
      console.log(products);

    })
  }

}
