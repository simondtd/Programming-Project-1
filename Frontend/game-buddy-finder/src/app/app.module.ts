import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { User } from './models/user';
import { UsersComponent } from './users/users.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginAttemptsComponent } from './login-attempts/login-attempts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { MessagePreviewComponent } from './message-preview/message-preview.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    ForgotPasswordComponent,
    LoginPageComponent,
    LoginAttemptsComponent,
    HomePageComponent,
    RegisterProfileComponent,
    ViewProfileComponent,
    InboxComponent,
    SendMessageComponent,
    MessagePreviewComponent,
    EditProfileComponent,
    FriendRequestComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
