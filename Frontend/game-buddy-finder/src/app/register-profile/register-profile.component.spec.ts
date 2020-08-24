import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RegisterProfileComponent } from './register-profile.component';
import 'jasmine';

describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(httpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
});

describe('RegisterProfileComponent', () => {
  let component: RegisterProfileComponent;
  let fixture: ComponentFixture<RegisterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a new user', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Register and join Playwith'`, () => {
    const fixture = TestBed.createComponent(RegisterProfileComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Register and join Playwith');
  });

  it(`should be only one user when registering`, () => {
    expect(component).toBeTruthy();
  });


});
