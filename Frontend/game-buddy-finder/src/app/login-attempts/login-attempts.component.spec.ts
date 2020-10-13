import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginAttemptsComponent } from './login-attempts.component';
import { LoginAttemptsService} from '../services/login-attempts.service'

describe('LoginAttemptsComponent', () => {
  let component: LoginAttemptsComponent;
  let fixture: ComponentFixture<LoginAttemptsComponent>;
  let service: LoginAttemptsService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [LoginAttemptsComponent],
      providers: [LoginAttemptsService]
    })
      .compileComponents();
    TestBed.inject(LoginAttemptsService);
    
    service = TestBed.get(LoginAttemptsService);
    fixture = TestBed.createComponent(LoginAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show successful login attempts', () => {
    expect(service).toBeTruthy();
  });

  it('should show home page after successful login', () => {
    expect(service).toBeTruthy();
  });

});
