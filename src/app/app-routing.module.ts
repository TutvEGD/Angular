import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import{ ProductEditComponent } from './product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path: 'product', component:ProductComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:'add',component:ProductAddComponent},
  {path:'list',component:ProductListComponent},
  {path: 'product/edit/:productID', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
