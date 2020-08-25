import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegisterProfileComponent } from './register-profile.component';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms'

describe('RegisterProfileComponent', () => {
  let component: RegisterProfileComponent;
  let fixture: ComponentFixture<RegisterProfileComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ RegisterProfileComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
