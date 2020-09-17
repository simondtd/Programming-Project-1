import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginAttemptsComponent } from './login-attempts/login-attempts.component';
import { HomePageComponent} from './home-page/home-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { MessagePreviewComponent } from './message-preview/message-preview.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { FriendSearchComponent } from './friend-search/friend-search.component';
import { ClanPreviewComponent } from './clan-preview/clan-preview.component';
import { ViewClanComponent } from './view-clan/view-clan.component';
import { CreateClanComponent } from './create-clan/create-clan.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'loginattempts', component: LoginAttemptsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterProfileComponent },
  { path: 'profile', component: ViewProfileComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'sendmessage', component: SendMessageComponent },
  { path: 'messagepreview', component: MessagePreviewComponent },
  { path: 'editprofile', component: EditProfileComponent },
  { path: 'friendrequest', component: FriendRequestComponent },
  { path: 'friendsearch', component: FriendSearchComponent },
  { path: 'clanpreview', component: ClanPreviewComponent },
  { path: 'viewclan', component: ViewClanComponent },
  { path: 'createclan', component: CreateClanComponent },
  { path: 'comment', component: CommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
