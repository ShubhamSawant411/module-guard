import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch: 'full'},
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule), canActivate: [AuthGuard] },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canActivate: [AuthGuard] },
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
