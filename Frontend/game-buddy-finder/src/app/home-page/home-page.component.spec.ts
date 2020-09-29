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


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check length of comments equal to zero', () => {

    let post = new Post(1,"Cool Post");
    post.comments = new Array<Comment>(5);              //Do this to set the amount of comments
    expect(component.getCommentsString(post)).toBeTruthy()  //Create more checks here where you do ".ToBe()" and put in the string you want to chekc against. Check the method and see what it retursn. make checks for each of the returns
  });

  it('should check length of comments equal to one', () => {
    let post = new Post(1,"Cool Post");
    expect(HomePageComponent).toBeTrue;
  });
});
