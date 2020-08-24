import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { LoginAttemptsComponent } from './login-attempts.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginAttemptsComponent', () => {
  let component: LoginAttemptsComponent;
  let fixture: ComponentFixture<LoginAttemptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAttemptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandler, HttpClient, HttpClientModule, LoginAttemptsService]
    });
    service = TestBed.inject(LoginAttemptsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
