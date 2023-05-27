import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Layouts/Admin-Layouts/admin-layout/admin-layout.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsAddComponent } from './Pages/Admin/Products-Add/products-add/products-add.component';
import { ProductsEditComponent } from './Pages/Admin/Products-Edit/products-edit/products-edit.component';
import { BaseLayoutComponent } from './Layouts/Base-Layouts/base-layout/base-layout.component';
import { ProductsDetailsComponent } from './Pages/Products-details/products-details/products-details.component';
import { DashboardComponent } from './Pages/Admin/Dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Pages/Page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "", component: BaseLayoutComponent, children: [
      { path: "products/:id", component: ProductsDetailsComponent }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: ProductsListComponent },
      { path: "product/add", component: ProductsAddComponent },
      { path: "product/:id/edit", component: ProductsEditComponent },
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
