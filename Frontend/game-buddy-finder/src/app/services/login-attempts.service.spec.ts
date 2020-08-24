import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { LoginAttemptsService } from './login-attempts.service';

describe('LoginAttemptsService', () => {
  let service: LoginAttemptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandler, HttpClient, HttpClientModule, LoginAttemptsService]
    });
    service = TestBed.inject(LoginAttemptsService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
