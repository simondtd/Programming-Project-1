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
    let profile = new Profile(0, "Simon", "Hesjevik", "SimonH", "aa", "aa", "simon@gmail.com", "Oceania", "", "1","What's your first visited country", "Ireland");
    expect(service.validateUser(profile)).toBeTrue();
  });

  it('Profile should be valid', () => {
    let profile = new Profile(1, "Adama", "Fofana", "AdamaF", "123", "123", "adama@gmail.com", "Oceania", "", "1", "What's your first visited country", "China" );
    expect(service.validateUser(profile)).toBeTrue();
  });

  it('Profile should be valid', () => {
    let profile = new Profile(2, "Steven", "Lee", "StevenL", "123", "123", "steven@gmail.com", "Indonesia", "", "1", "What's your first visited country", "Singapore");
    expect(service.validateUser(profile)).toBeTrue();
  });
  it('Profile should not be valid, passwords not equal', () => {
    let profile = new Profile(2, "Steven", "Lee", "StevenL", "45", "12", "steven@gmail.com", "Indonesia", "", "1", "What's your first visited country", "Singapore");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, username is 0', () => {
    let profile = new Profile(2, "Steven", "Lee", null, "123", "123", "steven@gmail.com", "Indonesia", "", "1", "What's your first visited country", "Singapore");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, firstnameis 0', () => {
    let profile = new Profile(1, null, "Fofana", "AdamaF", "123", "123", "adama@gmail.com", "Oceania", "", "1", "What's your first visited country", "China");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, lastname is 0', () => {
    let profile = new Profile(1, "Adama", null, "AdamaF", "123", "123", "adama@gmail.com", "Oceania", "", "1", "What's your first visited country", "China");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, password is 0', () => {
    let profile = new Profile(1, "Adama", "Fofana", "AdamaF", null, "123", "adama@gmail.com", "Oceania", "", "1", "What's your first visited country", "China");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, re-password is 0', () => {
    let profile = new Profile(1, "Adama", "Fofaa", "AdamaF", "123", null, "adama@gmail.com", "Oceania", "", "1", "What's your first visited country", "China");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, email  is 0', () => {
    let profile = new Profile(1, "Adama", "Fofana", "AdamaF", "123", "123", null, "Oceania", "", "1", "What's your first visited country", "China");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should not be valid, Region is 0', () => {
    let profile = new Profile(1, "Adama", "Fofana", "AdamaF", "123", "123", "adama@gmail.com", null, "", "1", "What's your first visited country", "China");
    expect(service.validateUser(profile)).toBeFalse();
  });
  it('Profile should be valid, even though profile pic URL is null', () => {
    let profile = new Profile(1, "Adama", "Fofana", "AdamaF", "123", "123", "adama@gmail.com", "Oceania", null, "1", "What's your first visited country", "China");
    expect(service.validateUser(profile)).toBeTrue();
  });
  it('Profile should be valid, event though mobile Number is 0', () => {
    let profile = new Profile(1, "Adama", "Fofana", "AdamaF", "123", "123", "adama@gmail.com", "Oceania", "", null, "What's your first visited country", "China");
    expect(service.validateUser(profile)).toBeTrue();
  });
});
