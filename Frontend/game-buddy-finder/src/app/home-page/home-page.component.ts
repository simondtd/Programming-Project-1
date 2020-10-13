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
   // a formgroup for post to connect the html input to the component.ts
  public postGroup: FormGroup;
  public user;
  public profile;
  public posts;

  constructor(private usersService: UsersService, private profilesService: ProfilesService, private postService: PostService, private formBuilder: FormBuilder, private router: Router) {
    // a formgroup for post to connect the html input to the component.ts
    this.postGroup = new FormGroup({
      post: new FormControl()
    });
   }

  ngOnInit(): void {
    // by subscribing a data, it updates the data of the specified variables
    this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
      this.user = data;
    })
    this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
      this.profile = data;
    })
    this.postService.getPostsForUser(this.usersService.UserId).subscribe((data) => {
      this.posts = data;
    })
  }

  // function to get the number of comments to be displayed on the home page 
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

  // function to view profile of the username and when clicked, they can view the poster profile via the user service
  public viewProfile(username) {
    this.usersService.searchFriend(username);
  }

  // function to view the comment of a post 
  public comment(post) {
    this.postService.CurrentPost = post;
    this.router.navigate(['/comment'])
  }

  // function to create a new post 
  public newPost() {
    // create a new post with the required parameters stated in the models by using the inputted post via the html
    var content = this.postGroup.get('post').value;
    var post = new Post(this.usersService.UserId, content);  
    // Updating the view 
    this.postService.createPost(post).subscribe((data) => {
      this.postService.getPosts().subscribe((data) => {
        this.posts = data;
      })
    })
    // to reset the input fields to empty
    this.postGroup.reset();
  }

  // function to delete a post with the post service 
  public deletePosts(postId) {
    this.postService.deletePost(postId).add((data) => {
      // update the view because a post is deleted 
      this.postService.getPosts().subscribe((data) => {
        this.posts = data;
      })
    })
  }
}
