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


  it('should create comment post', () => {
    let post = new Post(1,"Hello there");
    expect(component.getCommentsString).toBeTrue();
  });

  it('should check id and comment is zero', () => {
    let post = new Post(null,null);
    expect(component.getCommentsString(post)).toBeFalse;
  });

  it('should check length of comments equal to zero', () => {
    let post = new Post(1,null);
    expect(component.getCommentsString(post)).toEqual("No Comments");
  });

  it('should check length of comments equal to one', () => {
    let post = new Post(1,"a");
    expect(component.getCommentsString(post)).toEqual("1 Comments");
  });
});
