import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public user;
  public profile;
  public posts;

  constructor(private usersService: UsersService, private profilesService: ProfilesService, private postService: PostService) {
    console.log(this.usersService.UserId)
   }

  ngOnInit(): void {
    this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
      this.user = data;
    })
    this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
      this.profile = data;
    })
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(data);
    })
  }

}
