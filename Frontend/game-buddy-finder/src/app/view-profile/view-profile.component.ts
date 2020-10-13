import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { FriendService } from '../services/friend.service'
import { InterestService } from '../services/interest.service';
import { ClanService } from '../services/clan.service';
import { MessagesService } from '../services/message.service';
import { User } from '../models/user'
import { Message } from '../models/message'
import { Profile } from '../models/profile'
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  public user;
  public profile;
  public friends;
  public interests;
  public clanView;

  public users = Array<User>();
  public messages = Array<Message>();

  constructor(private router: Router, public usersService: UsersService, private clansService: ClanService, private messageService: MessagesService, private profilesService: ProfilesService, private friendService: FriendService, private interestService: InterestService) { }

  ngOnInit(): void {
    document.body.classList.add('bg');
    if (this.user == null) {
      this.user = this.usersService.UserView;
      // by subscribing a data, it updates the data of the specified variables
      this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
        this.user = data;
      })
      this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
        this.profile = data;
      })
      this.friendService.getFriendsOfUser(this.usersService.UserId).subscribe((data) => {
        this.friends = data;
      });
      this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
        this.interests = data;
      })
      this.clansService.getClansOfUser(this.usersService.UserId).subscribe((data) => {
        this.clanView = data;
      })
    }
  }
  // remove a friend of a user
  public removeFriend(userId1, userId2, username) {
    // if the button is clicked, a popup will show
    if (confirm("Are you sure to delete " + username)) {
      this.friendService.removeFriend(userId1, userId2).subscribe((data) => {
        this.friendService.getFriendsOfUser(this.usersService.UserId).subscribe((data) => {
          this.friends = data;
        });
      })
    }
  }

  // view the friends of a user and if clicked, it will preview the profile of their friend
  public viewFriend(friend) {
    this.usersService.searchFriend(friend.userName);
  }

  // view clan function for the joinned clan of a user and linking to clan preview to see the detailed information about the clan
  public viewClan(clan) {
    this.clansService.currentClan = clan;
    this.router.navigate(['/clanpreview'])
  }
}
