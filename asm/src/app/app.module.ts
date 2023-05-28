import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsDetailsComponent } from './Pages/Products-details/products-details/products-details.component';
import { PageNotFoundComponent } from './Pages/Page-not-found/page-not-found/page-not-found.component';
import { ProductsAddComponent } from './Pages/Admin/Products-add/products-add/products-add.component';
import { ProductsEditComponent } from './Pages/Admin/Products-edit/products-edit/products-edit.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { AdminLayoutComponent } from './Layouts/Admin-layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './Layouts/Base-Layout/base-layout/base-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsDetailsComponent,
    PageNotFoundComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsListComponent,
    AdminLayoutComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
