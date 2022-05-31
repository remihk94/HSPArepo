import { AlertifyService } from './../../services/alertify.service';

import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;
  user!: User;
  userSubmitted!: boolean;
  @ViewChild('Form') registerPropertyForm!: NgForm;
  constructor(private fb: FormBuilder, private userService: UserServiceService,
    private alertify: AlertifyService) {

  }
  ngOnInit() {
    this.createRegisterationForm();
  }
  createRegisterationForm() {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchValidator);
  }
  passwordMatchValidator(fg: AbstractControl) {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : { notmatched: true }
  }

  onSubmit() {
    console.log(this.registerationForm.value);
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
    //  this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      //  localStorage.setItem('Users' , JSON.stringify(this.user));
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertify.success("Congrats, you are successfully registered");
    } else {
      this.alertify.error("Kindly provide the required fields!");

    }
  }
  userData(): User {
    return this.user = {
      userName : this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  // ------------------------------------------
  // Getter methods for all form controls
  // ------------------------------------------

  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }

  get password() {
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
  //-----------------------------

}
