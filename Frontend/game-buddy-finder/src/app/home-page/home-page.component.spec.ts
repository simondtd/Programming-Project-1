import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from './home-page.component';
import { FormBuilder } from '@angular/forms';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ HomePageComponent ],
      providers : [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should check length of comments equal to zero', () => {
    let post = new Post(1,null);
    post.comments = new Array<Comment>(0); //Set comment length to 0
    expect(component.getCommentsString(post)).toEqual("No Comments");
  });

  it('should check length of comments equal to one', () => {
    let post = new Post(1,"a");
    post.comments = new Array<Comment>(1); //Set comment length to 1
    expect(component.getCommentsString(post)).toEqual("1 Comment");
  });

  it('should check length of comments equal to one', () => {
    let post = new Post(1,"a");
    post.comments = new Array<Comment>(2); //Set comment length to 1
    expect(component.getCommentsString(post)).toEqual("2 Comments");
  });

});
