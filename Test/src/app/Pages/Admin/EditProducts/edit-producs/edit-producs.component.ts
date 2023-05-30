import { Component } from '@angular/core';
import { IProduct } from 'src/app/Interface/Products';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-edit-producs',
  templateUrl: './edit-producs.component.html',
  styleUrls: ['./edit-producs.component.scss']
})
export class EditProducsComponent {
  products: IProduct = {
    name: "",
    price: 0,
  }
  constructor(private productsService: ProductsService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productsService.getByIdProducts(id).subscribe(products => {
        this.products = products
        console.log(products);

      })
    })
  }

  onHandleSubmit() {
    this.productsService.updateProducts(this.products)
      .subscribe(products => {
        console.log(products);

      })
  }

}
