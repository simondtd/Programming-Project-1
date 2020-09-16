import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanPreviewComponent } from './clan-preview.component';

describe('ClanPreviewComponent', () => {
  let component: ClanPreviewComponent;
  let fixture: ComponentFixture<ClanPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
