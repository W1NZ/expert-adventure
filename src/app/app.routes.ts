import { FavoriteComponent } from './favorite/favorite.component';
import { CartComponent } from './cart/cart.component';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: 'auth', component: LoginPageComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'home' }
];
