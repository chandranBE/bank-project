import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtService } from '../services/jwt.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

  constructor( private fb:FormBuilder,private jwtService:JwtService,private toastr:ToastrService,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    
     this.userService.springCreateUser('chandran').subscribe(data=>{
      console.log('data',data);
     })
    //  this.userService.delete(2).subscribe(data=>{console.log('1111111111111',data);})
    this.loginForm=this.fb.group(
      {
        userId:['',Validators.required],
        password:['',Validators.required]
      }
    ) 
  } 
  
  datas:any
  loginObj:any={}
  passwordWrong:boolean=false;
  loginFunction(data)
  { 
    let payload={ userId:data.userId,password:data.password}
   this.userService.authSession(payload).subscribe(response=>{
         let data =response
         if(data.Status=="login successfully")
         {
          this.toastr.success(data.Status)
          this.jwtService.saveToken(data.token)
          this.router.navigate(['/user'])
         }else{
          this.passwordWrong=true
         }
   })
  //   if(data.userId=="CHANDRANBE" && data.password==122250)
  //   {
  //     this.router.navigate(['/user'])
  //   }
  //   else if(data.userId=="" || data.password=="")
  //   {
  //     this.passwordWrong=false
  //   }
  //    else 
  //      this.passwordWrong=true
  }

}
