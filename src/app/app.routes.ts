import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  // { path: 'account', component:  },
  // { path: 'cart', component:  },
  // { path: 'favorites', component:  },
  { path: '**', redirectTo: 'home' }
];
