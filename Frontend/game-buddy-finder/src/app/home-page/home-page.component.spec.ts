import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from './home-page.component';
import { FormBuilder } from '@angular/forms';

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
});
