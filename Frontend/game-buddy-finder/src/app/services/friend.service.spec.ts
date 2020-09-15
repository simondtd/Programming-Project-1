import { TestBed } from '@angular/core/testing';
import { FriendService } from './friend.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('FriendService', () => {
  let service: FriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< Updated upstream
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
=======
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ FriendService ]
>>>>>>> Stashed changes
    });
    service = TestBed.inject(FriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
