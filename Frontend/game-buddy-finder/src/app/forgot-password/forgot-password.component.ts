import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { md5 } from '../Helper/md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public resetPasswordGroup: FormGroup;

  constructor(private userService: UsersService, private router: Router) {
    this.resetPasswordGroup = new FormGroup({
      username: new FormControl(),
      secretQuestion: new FormControl(),
      secretAnswer: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  public reset() {
    var username = this.resetPasswordGroup.get('username').value;

    var secretQuestion = this.resetPasswordGroup.get('secretQuestion').value;
    var secretAnswer = this.resetPasswordGroup.get('secretAnswer').value;

    var password = this.resetPasswordGroup.get('password').value;
    var repassword = this.resetPasswordGroup.get('repassword').value;

    var hash = md5(password);
    var rehash = md5(repassword);

    if (hash == rehash) {
      this.userService.resetPassword(username, secretQuestion, secretAnswer, hash).subscribe(data => {
        if (data) {
          this.router.navigate(['/login']);
        }
        else {
          window.alert("Password Reset Failed");
        }
      });
    }
    else {
      window.alert("Passwords doesnt match!");
    }
  }
}
