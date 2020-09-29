import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Comment } from '../models/comment'
import { Post } from '../models/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = environment.baseUrl + 'api/post';
  public CurrentPost;

  constructor(private httpClient: HttpClient, private router: Router) { }

  //Returns all posts
  public getPosts() {
    return this.httpClient.get(this.postUrl);
  }

  //Gets a post by id
  public getPost(postId: number) {
    return this.httpClient.get(this.postUrl + '/' + postId);
  }

  //Gets posts made by user
  public getPostsByUser(userId: number) {
    return this.httpClient.get(this.postUrl + '/user/' + userId);
  }

  //Gets posts to display on homepage, gets posts by the users friends
  public getPostsForUser(userId: number) {
    return this.httpClient.get(this.postUrl + '/for/' + userId);
  }

  //Adding a comment to a piost
  public addComment(comment: Comment) {
    if (this.validateComment(comment)) {
      return this.httpClient.post(this.postUrl + '/comment/', comment).subscribe((data) => {});
    }
  }

  //Deleting a post
  public deletePost(postId: number) {
    return this.httpClient.delete(this.postUrl + '/' + postId).subscribe((data) => {});
  }

  //Validating to make sure its ... valid
  public validatePost(post: Post) {
    if (post.posterUserId == null) {
      return false;
    }

    if (post.content == null) {
      return false;
    }

    return true;
  }

  public validateComment(comment: Comment) {
    if (comment.postId == null) {
      return false;
    }

    if (comment.posterUserId == null) {
      return false;
    }

    if (comment.content == null) {
      return false;
    }

    return true;
  }

  //Sending a post to the backend
  public createPost(post: Post) {
    if (this.validatePost(post)) {
      return this.httpClient.post(this.postUrl, post).subscribe((data) => {
        this.router.navigate(['/home'])
      });;
    }
    else {
      return null;
    }
  }

  //Deleting a comment
  public deleteComment(commentId: number) {
    return this.httpClient.delete(this.postUrl + '/comment/' + commentId).subscribe((data) => {});
  }
}
