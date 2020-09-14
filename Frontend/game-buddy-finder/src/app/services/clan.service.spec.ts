import { async,ComponentFixture,TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ClanService } from './clan.service';

describe('ClanService', () => {
  let service: ClanService;
  let fixture: ComponentFixture<ClanService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ClanService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanService);
    service = TestBed.inject(ClanService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
