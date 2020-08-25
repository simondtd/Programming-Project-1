import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersComponent } from './users.component';
import { UsersService } from '../services/users.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [UsersService]
    })
    .compileComponents();
    TestBed.inject(UsersService);

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
