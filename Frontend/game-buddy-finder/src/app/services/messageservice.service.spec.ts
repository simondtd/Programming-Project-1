import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from './messageservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MessageserviceService', () => {
  let service: MessageService;
  let fixture: ComponentFixture<MessageService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ MessageService ]
    })
    .compileComponents();
    

    fixture = TestBed.createComponent(MessageService);
    service = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(MessageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageService);
    service = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
