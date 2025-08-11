import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { Product } from './components/product/product';
import { User } from './components/user/user';
import { Login } from './components/login/login';
import { Ppal } from './components/ppal/ppal';
import { Reports } from './components/reports/reports';



const routes: Routes = [

  { path: 'app', component: App },
  { path: 'product', component: Product },
  { path: 'user', component: User },
  { path: 'login', component: Login },
  { path: 'ppal', component: Ppal },
  { path: 'reports', component: Reports },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
