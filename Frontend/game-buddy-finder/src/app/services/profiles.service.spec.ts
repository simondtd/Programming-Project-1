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
    let profile = new Profile(1, "Adama", "Fofana", "AdamaF", "123", "123", "adama@gmail.com", "Oceania", "", "1");
    expect(service.validateUser(profile)).toBeTrue();
  });

  it('Profile should be valid', () => {
    let profile = new Profile(2, "Steven", "Lee", "StevenL", "123", "123", "steven@gmail.com", "Indonesia", "", "1");
    expect(service.validateUser(profile)).toBeTrue();
  });
  it('Profile should not be valid, passwords not equal', () => {
    let profile = new Profile(2, "Steven", "Lee", "StevenL", "45", "12", "steven@gmail.com", "Indonesia", "", "1");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, username is 0', () => {
    let profile = new Profile(2, "Steven", "Lee", null, "123", "123", "steven@gmail.com", "Indonesia", "", "1");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, firstname and lastname is 0', () => {
    let profile = new Profile(32, null, null, "AdamaF", "123", "123", "adama@gmail.com", "Oceania", "", "1");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, all is 0', () => {
    let profile = new Profile(34, null, null, null, null, null, null, null, null, null);
    expect(service.validateUser(profile)).toBeFalse();
  });
});
