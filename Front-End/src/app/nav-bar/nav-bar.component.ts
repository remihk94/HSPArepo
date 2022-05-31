import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../property/services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser: string | undefined;
  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  loggedin(){
 // this.loggedinUser = localStorage.getItem('token') || '{}';
   return localStorage.getItem('token') ;
 //  return this.loggedinUser
  }

  onlogout(){
    localStorage.removeItem('token');
    this.alertify.success("You are logged out.");

  }

}
