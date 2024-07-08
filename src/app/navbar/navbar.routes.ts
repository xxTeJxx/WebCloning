import { Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { NavbarComponent } from './navbar.component';
import { UsersComponent } from './users/users.component';

export const navbaroutes: Routes = [
  {
    path: 'home',
    component: NavbarComponent,
    children: [{ path: 'User', component: UsersComponent },  { path: 'landing', component: LandingComponent },
    ],
  },
];
