import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfilesService } from './profiles.service';
import { Profile } from '../models/profile';

describe('ProfilesService', () => {
  let service: ProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])]
    });
    service = TestBed.inject(ProfilesService);
  });

  it('Profile should be valid', () => {
    let profile = new Profile(0, "Simon", "Hesjevik", "SimonH", "aa", "aa", "simon@gmail.com", "Oceania", "", "1");
    expect(service.validateUser(profile)).toBeTrue();
  });

  it('Profile should be valid', () => {
    let profile = new Profile(1, "Adama", "Fofana", "AdamaF", "bb", "bb", "adama@gmail.com", "Oceania", "", "1");
    expect(service.validateUser(profile)).toBeTrue();
  });

  it('Profile should be valid', () => {
    let profile = new Profile(2, "Steven", "Lee", "StevenL", "cc", "cc", "steven@gmail.com", "Indonesia", "", "1");
    expect(service.validateUser(profile)).toBeTrue();
  });
});
