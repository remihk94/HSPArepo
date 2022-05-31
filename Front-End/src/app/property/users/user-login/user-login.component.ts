import { AlertifyService } from './../../services/alertify.service';
import { AuthService } from './../../services/Auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
     private alertify: AlertifyService,
     private router: Router) { }

  ngOnInit() {
  }
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const user = this.authService.authUser(loginForm.value);
    if(user){
      localStorage.setItem('token', user.userName);
      this.alertify.success('Log in Successful!');
      this.router.navigate(['/']);
    }
    else {
     this.alertify.error('Log in not Successful!')
    }
  }


}
