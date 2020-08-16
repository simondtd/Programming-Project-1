import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAttemptsComponent } from './login-attempts.component';

describe('LoginAttemptsComponent', () => {
  let component: LoginAttemptsComponent;
  let fixture: ComponentFixture<LoginAttemptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAttemptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show successful login attempts', () => {
    expect(service).toBeTruthy();
  });

  it('should show home page after successful login, () => {
    expect(service).toBeTruthy();
  });

  it('should login successfully', () => {
    // * arrange
    const title = 'Hey there, i hope you are enjoying this article';
    const titleElement = element.querySelector('.header-title');
    // * act
    component.title = title;
    fixture.detectChanges(); 
    // * assert
    expect(titleElement.textContent).toContain(title);
});
