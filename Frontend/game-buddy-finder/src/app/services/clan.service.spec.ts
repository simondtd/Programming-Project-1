import { async,ComponentFixture,TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ClanService } from './clan.service';
import { RouterTestingModule } from '@angular/router/testing';
import {Clan} from '../models/clan';

describe('ClanService', () => {
  let service: ClanService;
  let fixture: ComponentFixture<ClanService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    service = TestBed.inject(ClanService);
  }));


  it('Clan should be valid', () => {
    let clan = new Clan(1, "Simon", "clan cool", "Simoncool", "Oceania");
      expect(service.validateClan(clan)).toBeTrue();
  });

  it('Clan name should not be valid', () => {
    let clan = new Clan(null, null, null, null, null);
      expect(service.validateClan(clan)).toBeFalse();
  });



});
