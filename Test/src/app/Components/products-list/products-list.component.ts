import { Component } from '@angular/core';
import { IProduct } from 'src/app/Interface/Products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: IProduct[] = []
  constructor(private productService: ProductsService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, error => console.log(error)
    )
  }
  removeItem(id: any) {
    this.productService.deleteProducts(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    })
  }




}
