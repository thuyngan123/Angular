import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/Interface/Products';
import { ProductService } from 'src/app/Services/service.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: IProduct[] = []
  title = 'Quản lí sản phẩm';
  status: boolean = false;
  valueInput: string = "";
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    }, error => console.log(error))
  }

  toggle() {
    console.log('1');
    this.status = !this.status
  }
  setValue(e: any) {
    this.valueInput = e.target.value
  }
  removeItem(id: any) {
    this.productService.deleteProducts(id).subscribe(() => {
      console.log('Ban da xoa thanh cong')
      this.products = this.products.filter(item => item.id !== id)
    })
  }


}
