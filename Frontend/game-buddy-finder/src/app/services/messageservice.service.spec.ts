import { TestBed } from '@angular/core/testing';
import { MessagesService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Message} from '../models/message';

describe('MessageserviceService', () => {
  let service: MessagesService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
    
    service = TestBed.inject(MessagesService);
  }));

  it('Message should be valid', () => {
    let message = new Message(0,1,"Testing Subject","Hey");
    expect(service.validateMessage(message)).toBeTrue();
  });

  
  it('Message should not be valid', () => {
    let message = new Message(null,null,null,null);
    expect(service.validateMessage(message)).toBeFalse();
  });
});
