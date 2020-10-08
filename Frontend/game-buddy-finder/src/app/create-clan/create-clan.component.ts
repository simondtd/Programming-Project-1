import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { UsersService } from '../services/users.service';
import { ClanService } from '../services/clan.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Clan } from '../models/clan';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-clan',
  templateUrl: './create-clan.component.html',
  styleUrls: ['./create-clan.component.scss']
})
export class CreateClanComponent implements OnInit {
  public clanGroup: FormGroup;

  constructor(private router: Router,private profilesService: ProfilesService, private formBuilder: FormBuilder, private clansService: ClanService, private usersService: UsersService) {
    this.clanGroup = new FormGroup({
      clanname: new FormControl(),
      clanregion: new FormControl(),
      clandescription: new FormControl(),
      clanpictureurl: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  public create() {
    var clanname = this.clanGroup.get('clanname').value;
    var clanregion = this.clanGroup.get('clanregion').value;
    var clandescription = this.clanGroup.get('clandescription').value;
    var clanpictureurl = this.clanGroup.get('clanpictureurl').value;

    var clan = new Clan(this.usersService.UserId, clanname, clandescription, clanpictureurl, clanregion); 

    if (this.clansService.validateClan(clan)) {
      this.clansService.createClan(clan).add(data => {
        this.router.navigate(['/viewclan']);
      })
    }

  }

}
