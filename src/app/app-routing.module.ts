import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../app/products/products.component'
import { ProductGroupComponent } from '../app/components/product-group/product-group.component'
import { ProductSubGroupComponent } from '../app/components/product-sub-group/product-sub-group.component'
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from '../app/components/login/login.component'
import { UserLoginComponent } from '../app/components/user-login/user-login.component';
import { AuthGuardService } from '../app/services/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: UserLoginComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuardService] },
  { path: 'groups', component: ProductGroupComponent },
  { path: 'subgroups', component: ProductSubGroupComponent },
  { path: 'dashboard', component: DashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
