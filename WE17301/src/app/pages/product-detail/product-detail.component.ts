import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interface/Products';
import { ProductService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: IProduct = {
    name: "",
    price: 0

  }
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.router.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;

      }, error => console.log(error.message))
    })
  }
}
