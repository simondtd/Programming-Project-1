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
  public comment;
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
      this.comment = data;
      console.log(data);
    })
  }

  public newComment() {
    var content = this.commentGroup.get('comment').value;
    
    var comment = new Comment(this.postService.CurrentPost.postId, this.usersService.UserId, content);
    console.log(comment.postId);
    this.postService.addComment(comment);
    this.commentGroup.reset();
  }
}
