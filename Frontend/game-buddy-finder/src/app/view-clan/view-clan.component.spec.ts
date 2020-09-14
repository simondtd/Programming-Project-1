import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClanComponent } from './view-clan.component';

describe('ViewClanComponent', () => {
  let component: ViewClanComponent;
  let fixture: ComponentFixture<ViewClanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClanComponent ]
    })
    .compileComponents();
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
