import { TestBed } from '@angular/core/testing';
import { InterestService } from './interest.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('InterestService', () => {
  let service: InterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    });
    service = TestBed.inject(InterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
