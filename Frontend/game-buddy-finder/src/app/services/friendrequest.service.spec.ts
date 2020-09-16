import { TestBed} from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FriendRequestService } from './friendrequest.service';

describe('FriendrequestService', () => {
  let service: FriendRequestService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    service = TestBed.inject(FriendRequestService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
