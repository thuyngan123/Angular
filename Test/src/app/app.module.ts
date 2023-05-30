import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { BaseLayoutComponent } from './Layout/layout-base/base-layout/base-layout.component';
import { AdminLayoutComponent } from './Layout/Admin-layout/admin-layout/admin-layout.component';
import { AddProductsComponent } from './Pages/Admin/AddProducts/add-products/add-products.component';
import { EditProducsComponent } from './Pages/Admin/EditProducts/edit-producs/edit-producs.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductsComponent,
    EditProducsComponent,
    AdminLayoutComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
