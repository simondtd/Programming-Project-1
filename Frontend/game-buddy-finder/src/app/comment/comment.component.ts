import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Comment } from '../models/comment';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  public commentGroup: FormGroup;
  public comment;

  constructor(private postService: PostService, private formBuilder: FormBuilder, private UsersService: UsersService) { 
    this.commentGroup = new FormGroup({
      postID: new FormControl(),
      posteruserID: new FormControl(),
      content: new FormControl()
    });
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.comment = data;
    })
  }

public newComment() {
  var postID = this.commentGroup.get('postID').value;
  var posteruserID = this.commentGroup.get('posteruserID').value;
  var content = this.commentGroup.get('content').value;
  
  this.UsersService.getUserByUsername(postID).subscribe((data) => {
    var postId = data[0].userId

    console.log(postId);

    var senderId = this.UsersService.UserId;

      console.log(senderId);
      console.log(posteruserID);
      console.log(content);
    
    var comment = new Comment(postId, posteruserID, content);
    this.postService.addComment(comment);
  });
}
}
