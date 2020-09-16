import { TestBed } from '@angular/core/testing';
import { MessagesService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MessageserviceService', () => {
  let service: MessagesService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
    
    service = TestBed.inject(MessagesService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
