import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/user'
import { Profile } from '../models/profile'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
}
