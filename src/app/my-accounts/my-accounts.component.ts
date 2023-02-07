import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.css']
})
export class MyAccountsComponent implements OnInit {


  coloumn1:any
  coloumn2:any
  actDetails:boolean=false
  accountSummary:boolean=false
  constructor() { }
  readonly  now = new Date();
  ngOnInit(): void {
    this.actSummary()

  }
  actSummary()
  {
    this.accountSummary=!this.accountSummary
    if(this.accountSummary==false)
    {
      this.actDetails=false
    }
   
  }
  accountDetails()
  {
    this.actDetails=!this.actDetails
  
  }
  createAccount:boolean=false


}
