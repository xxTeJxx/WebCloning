import { Routes } from '@angular/router';
import { navbaroutes } from './navbar/navbar.routes';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    { path: "", component: LoginComponent },
  ...navbaroutes,
//   { path: '**', component: LoginComponent },
];
