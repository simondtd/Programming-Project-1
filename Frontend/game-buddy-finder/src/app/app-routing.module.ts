import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginAttemptsComponent } from './login-attempts/login-attempts.component';
import { HomePageComponent} from './home-page/home-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterProfileComponent } from './register-profile/register-profile.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'loginattempts', component: LoginAttemptsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
