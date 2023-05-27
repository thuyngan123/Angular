import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { AdminLayoutComponent } from './Layouts/Admin-Layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './Layouts/Base-Layouts/base-layout/base-layout.component';
import { ProductsAddComponent } from './Pages/Admin/Products-Add/products-add/products-add.component';
import { ProductsEditComponent } from './Pages/Admin/Products-Edit/products-edit/products-edit.component';
import { HomePageComponent } from './Pages/Home-page/home-page/home-page.component';
import { ProductsDetailsComponent } from './Pages/Products-details/products-details/products-details.component';
import { DashboardComponent } from './Pages/Admin/Dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Pages/Page-not-found/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    HomePageComponent,
    ProductsDetailsComponent,
    DashboardComponent,
    PageNotFoundComponent
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
