import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FriendRequestService } from './friendrequest.service';

describe('FriendrequestService', () => {
  let service: FriendRequestService;
  let fixture: ComponentFixture<FriendRequestService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [FriendRequestService],
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(FriendRequestService);
    service = fixture.componentInstance;
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
