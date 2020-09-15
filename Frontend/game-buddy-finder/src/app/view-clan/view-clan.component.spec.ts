import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewClanComponent } from './view-clan.component';

describe('ViewClanComponent', () => {
  let component: ViewClanComponent;
  let fixture: ComponentFixture<ViewClanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ ViewClanComponent ]
    })
    .compileComponents();
    TestBed.inject(ViewClanComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
