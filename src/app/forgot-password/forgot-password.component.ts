import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
otp:boolean=false
forgotPassword:boolean=true
  otpSubmit()
  {

    this.otp=true
    this.forgotPassword=false
  }

}
