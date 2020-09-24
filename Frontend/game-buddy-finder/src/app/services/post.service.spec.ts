import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Post } from '../models/post';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Posts should be valid', () => {
    let post = new Post(1,"Hey");
    expect(service.validatePost(post)).toBeTrue();
  });

  it('Posts should be empty', () => {
    let post = new Post(null,null);
    expect(service.validatePost(post)).toBeFalse();
  });

  it('Comment should be valid', () => {
    let comment = new Comment(1);
    expect(service.validateComment(comment.)).toBeTrue();
  });



});
