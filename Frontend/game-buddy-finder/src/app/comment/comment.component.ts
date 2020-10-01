import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Comment } from '../models/comment';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  public commentGroup: FormGroup;
  public comments;
  public user;
 
  constructor(private usersService: UsersService, private profilesService: ProfilesService, public postService: PostService, private formBuilder: FormBuilder) {
    this.commentGroup = new FormGroup({
      comment: new FormControl()
    });
  }

  ngOnInit(): void {
    this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
      this.user = data;
    })
    this.postService.getPost(this.usersService.UserId).subscribe((data) => {
      this.comments = data;
    })
  }


  public newComment() {
    var content = this.commentGroup.get('comment').value;
    var comment = new Comment(this.postService.CurrentPost.postId, this.usersService.UserId, content);
    this.postService.addComment(comment);
    this.commentGroup.reset();
  }

  public delete(commentId) {
    this.postService.deleteComment(commentId);
    this.postService.getPosts().subscribe((data) => {
    })
  }
}
