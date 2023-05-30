import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AdminLayoutComponent } from './Layout/Admin-layout/admin-layout/admin-layout.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { AddProductsComponent } from './Pages/Admin/AddProducts/add-products/add-products.component';
import { EditProducsComponent } from './Pages/Admin/EditProducts/edit-producs/edit-producs.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "product", component: ProductsListComponent },
      { path: "product/add", component: AddProductsComponent },
      {
        path: "product/:id/edit", component: EditProducsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
