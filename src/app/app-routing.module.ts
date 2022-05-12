import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { UpdateCategoryComponent } from './Components/update-category/update-category.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [

  {path:"Products",component:ProductsComponent,canActivate:[AuthGuard]},
  {path:"Categories",component:CategoriesComponent,canActivate:[AuthGuard]},
  {path:"AddNewProduct",component:AddProductComponent},
  {path:"AddNewCategory",component:AddCategoryComponent},
  {path:"EditProduct/:Pid",component:UpdateProductComponent},
  {path:"Login",component:LoginComponent},
  {path:"sideBar",component:SideBarComponent},
  {path:"UpdateCategory/:Cid",component:UpdateCategoryComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
