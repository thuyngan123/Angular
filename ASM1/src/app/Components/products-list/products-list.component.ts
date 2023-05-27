import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Interface/Products';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Iproduct[] = []
  title = "Quản lí sản phẩm"
  constructor(private productService: ProductsService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, error => console.log(error))

  }
  removeItem(id: any) {
    this.productService.deleteProducts(id).subscribe(() => {
      alert('Bạn đã xóa thành công')
      this.products = this.products.filter(item => item.id !== id)
    })
  }

}
