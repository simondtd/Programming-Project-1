import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordComponent } from './forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ ForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('Secret question should be valid', () => {
    let SecretQuestion = ("What is your pet name?");
    expect(component.reset()).toBeTrue(); 
  });

  it('Secret question should not be valid', () => {
    let SecretQuestion = ("0011000");
    expect(component.reset()).toBeFalse(); 
  });

  it('Secret answer should be valid', () => {
    let SecretAnswer = ("Sky");
    expect(component.reset()).toBeTrue(); 
  });

  it('Secret question should not be valid', () => {
    let SecretQuestion = ("696969");
    expect(component.reset()).toBeFalse(); 
  });
  */
});
