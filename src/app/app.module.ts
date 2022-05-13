import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { UploadComponent } from './Components/upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DetailsComponent } from './Components/details/details.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { LoginComponent } from './Components/login/login.component';

import { JwtModule } from '@auth0/angular-jwt';
import { UpdateCategoryComponent } from './Components/update-category/update-category.component';
import { RegisterComponent } from './Components/register/register.component';

export function tokenGetter()
{
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    AddCategoryComponent,
    SideBarComponent,
    CategoriesComponent,
    UploadComponent,
    DetailsComponent,
    UpdateProductComponent,
    LoginComponent,
    UpdateCategoryComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:9964"],
        disallowedRoutes:[]
      }
    })

  ],
  entryComponents:[DetailsComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
