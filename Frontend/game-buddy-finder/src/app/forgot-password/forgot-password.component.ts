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
    // a formgroup for resetpassword to connect the html input to the component.ts
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

  // function to reset passowrd 
  public reset() {
    // assigning the variables to the inputted field in the html file 
    var username = this.resetPasswordGroup.get('username').value;

    var secretQuestion = this.resetPasswordGroup.get('secretQuestion').value;
    var secretAnswer = this.resetPasswordGroup.get('secretAnswer').value;

    var password = this.resetPasswordGroup.get('password').value;
    var repassword = this.resetPasswordGroup.get('repassword').value;

    // hashing the password using md5
    var hash = md5(password);
    var rehash = md5(repassword);

    // if the hash are the same
    if (hash == rehash) {
      // get the information if all the parameters are correct and returns a data 
      this.userService.resetPassword(username, secretQuestion, secretAnswer, hash).subscribe(data => {
        if (data) {
          // go to /login page
          this.router.navigate(['/login']);
        }
        // if any of the parameters are incorrect
        else {
          window.alert("Password Reset Failed");
        }
      });
    }
    // if the password does not match
    else {
      window.alert("Passwords doesnt match!");
    }
  }
}
