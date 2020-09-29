import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { PostService } from '../services/post.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Post } from '../models/post';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public postGroup: FormGroup;
  public user;
  public profile;
  public posts;

  constructor(private usersService: UsersService, private profilesService: ProfilesService, private postService: PostService, private formBuilder: FormBuilder, private router: Router) {
    console.log(this.usersService.UserId)
    this.postGroup = new FormGroup({
      post: new FormControl()
    });
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

  
  public getCommentsString(post) {
    var string = "";

    if (post.comments.length == 0) {
      string = "No Comments"; 
    }
    else if (post.comments.length == 1) {
      string = "1 Comment";
    }
    else{
      string = post.comments.length + " Comments";
    }

    return string;
  }

  public comment(post) {
    this.postService.CurrentPost = post;
    this.router.navigate(['/comment'])
  }
  public newPost() {
    var content = this.postGroup.get('post').value;
    console.log(post);
    var post = new Post(this.usersService.UserId, content);  
    this.postService.createPost(post);
    this.postGroup.reset();
  }

  public deletePosts(postId) {
    this.postService.deletePost(postId);
    console.log(postId);
    this.postService.getPosts().subscribe((data) => {
    });
  }
}
