import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from './home-page.component';
import { FormBuilder } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from './post.service';

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
    let post = new Post(null,null);
    expect(HomePageComponent.getCommentsString(post)).toBeTrue();
  });

  it('should check length of comments equal to one', () => {
    let post = new Post(1,"Cool Post");
    expect(HomePageComponent.getCommentsString(post)).toBeTrue();
  });
});
