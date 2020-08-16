import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginPageComponent }

import { LoginAttemptsComponent } from './login-attempts/login-attempts.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'loginattempts', component: LoginAttemptsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
