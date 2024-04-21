import { FavoriteComponent } from './favorite/favorite.component';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'favorites', component: FavoriteComponent },
  // { path: 'account', component:  },
  // { path: 'cart', component:  },
  { path: '**', redirectTo: 'home' }
];
