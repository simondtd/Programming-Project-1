import { async,ComponentFixture,TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ClanService } from './clan.service';
import { RouterTestingModule } from '@angular/router/testing';

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
    TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
    declarations: [ClanService],  
    });
    service = TestBed.inject(ClanService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
