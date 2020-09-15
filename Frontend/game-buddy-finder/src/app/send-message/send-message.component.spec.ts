import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SendMessageComponent } from './send-message.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
<<<<<<< Updated upstream
import { FormBuilder } from '@angular/forms';
=======
import { FormBuilder} from '@angular/forms'
>>>>>>> Stashed changes

describe('SendMessageComponent', () => {
  let component: SendMessageComponent;
  let fixture: ComponentFixture<SendMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
<<<<<<< Updated upstream
      declarations: [SendMessageComponent],
=======
      declarations: [ SendMessageComponent ],
>>>>>>> Stashed changes
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(SendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
