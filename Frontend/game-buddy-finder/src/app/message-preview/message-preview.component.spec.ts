import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MessagePreviewComponent } from './message-preview.component';


describe('MessagePreviewComponent', () => {
  let component: MessagePreviewComponent;
  let fixture: ComponentFixture<MessagePreviewComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ MessagePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
