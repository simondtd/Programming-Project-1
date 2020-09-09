import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MessageserviceService', () => {
  let service: MessagesService;
  let fixture: ComponentFixture<MessagesService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ MessagesService ]
    })
    .compileComponents();
    

    fixture = TestBed.createComponent(MessagesService);
    service = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(MessagesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesService);
    service = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
