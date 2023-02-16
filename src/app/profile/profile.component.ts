import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { environment } from '../../environments/environment';
import {  UserService } from '../services/user.service';
import {  JwtService } from '../services/jwt.service';
import { ToastrService } from 'ngx-toastr';
import * as $ from "jquery";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  constructor( private userService:UserService,private fb:FormBuilder, private toastr: ToastrService,private jwtService:JwtService ) { }
  editForm:FormGroup
  filter:FormGroup
  mode : any
  currentUserDetails:any
  defaultImg:any = './assets/images/default_img.png'
  ngOnInit(): void {

    this.errorMessage = ''
    this.currentUserDetails=this.userService.currentuserSubject
    
    if(this.currentUserDetails.userimagepath)
    {
       this.currentUserDetails.userimagepath=`${environment.img_url}${this.currentUserDetails.userimagepath}`
    }
    else{
      this.currentUserDetails.userimagepath=this.defaultImg
    }
     
      this.editForm=this.fb.group({
          
        userName:[this.currentUserDetails.userName],
        userTitle:[this.currentUserDetails.userTitle],
        userFirstName:[this.currentUserDetails.firstName],
        userLastName:[this.currentUserDetails.lastName],
        email:[this.currentUserDetails.email],
        dob:[this.currentUserDetails.dob],
        gender:[this.currentUserDetails.gender]
        
        
      })
    }
   
   editFunction(data:any)
   { 
      var editObj={
        "dob": data.dob,
        "email": data.email,
        "gender":data.gender,
        "userFirstName":data.userFirstName,
        "userLastName": data.userLastName,
        "userTitle": data.userTitle,
        "uploadimage": this.imagearr,
        "login": {
          "username":data.userName
        }

    }
     
      
    //  this.userService.editUser(editObj ).subscribe(data=>{
    //    var datas=data
    //    if(datas.operationMessage=='User Updated Success')
    //    this.toastr.success(data.operationMessage)
    // else
    //    this.toastr.error(data.operationMessage)
       
    //   })
   }
   imgMaxSize:any
   imagearr:any
   dataimg:any
   fileUpload(event: any) {
     
     let acceptFormat = ['image/png', 'image/x-png', 'image/jpeg', 'image/jpg']
     let reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload = (events: any) => {
       if (!acceptFormat.includes(event.target.files[0].type)) {
          //  this.toast.error('This file is not allowed, upload png or jpg file ', '', {
          //    timeOut: this.timealert
          //  })
          //  return;
           }

       if (event.target.files[0].size > this.imgMaxSize) {
            // this.toast.error('Maximum file size exceed, file size should be below 1 MB', '', {
            //   timeOut: this.timealert
            // })
            // this.dataimg = this.defaultUl;
            // return;
            } 

       else {

        

         this.dataimg = events.currentTarget.result;
         this.imagearr = {
           filename: event.target.files[0].name,
           primary: true,
           filetype: event.target.files[0].type.split('/')[1],
           value: events.currentTarget.result.split(',')[1]
         };
       }
 
     }
   }
   changePassword:any={}
   newConfirm:boolean=false
   
  changePasswordFunction(value)
  {
   
   
        if(this.changePassword.newPwd===this.changePassword.confirmPwd)
        { 
           this.newConfirm=false
          var obj= {
            "confirmPassword":btoa(this.changePassword.confirmPwd),
            "newPassword": btoa(this.changePassword.newPwd),
            "oldPassword": btoa(this.changePassword.currentPwd)
          }
		  
        //   this.userService.changePassword(obj).subscribe(data=>{
        //     let response=data
			
        //     if( response.message=='Old password mismatch!')
        //     {
        //       this.toastr.error(response.message)
        //     }
        //     else
        //     this.toastr.success(response.message)
        //   })

        }
        else{
              this.newConfirm=true
        }
     
  }

  errorMessage : any
  checkValidation(){
	  
	  if(this.passkey && this.passkey1 && this.passkey2 && this.passkey3 && this.passkey4){
		  this.errorMessage = ''
	  }
	  else{
		  this.errorMessage = 'Kindly satisfy all the requirements for setting a password'
	  }
  }

  show:boolean=false
  toggleShow(event: any, id: any, inputid: any) {
		this.show = !this.show;

		if (this.show) {
			$(`#${id}`).removeClass('fa-eye')
			$(`#${id}`).addClass('fa-eye-slash')
			let input = $(`#${inputid}`);
			input.attr('type', 'text')
		}
		else {
			$(`#${id}`).removeClass('fa-eye-slash')
			$(`#${id}`).addClass('fa-eye')
			let input = $(`#${inputid}`);
			input.attr('type', 'password')

		}
	}


  //password validation
  passval: boolean = false;
	passval1: boolean = false;
	passval2: boolean = false;
	passval3: boolean = false;
	passval4: boolean = false;
	passkey: boolean = false;
	passkey1: boolean = false;
	passkey2: boolean = false;
	passkey3: boolean = false;
	passkey4: boolean = false;
	passlast: boolean = false;
	passlast1: boolean = false;
	passlast2: boolean = false;
	passlast3: boolean = false;
	passlast4: boolean = false;
  onKey(event: any) {
		var lowerCaseLetters = /[a-z]/g;
		var upperCaseLetters = /[A-Z]/g;
		var numbers = /[0-9]/g;
		var special = /[#$^+=!*()@%&]/g;
		if (event.target.value.match(lowerCaseLetters)) {
			this.passval = true
		}
		else {
			this.passval = false
		}
		if (event.target.value.match(upperCaseLetters)) {
			this.passval1 = true
		}
		else {
			this.passval1 = false
		}
		if (event.target.value.match(numbers)) {
			this.passval2 = true
		}
		else {
			this.passval2 = false
		}
		if (event.target.value.length >= 8) {
			this.passval3 = true
		}
		else {
			this.passval3 = false
		}
		if (event.target.value.match(special)) {
			this.passval4 = true
		}
		else {
			this.passval4 = false
		}

	}
	onKey1(event: any) {
		var lowerCaseLetters = /[a-z]/g;
		var upperCaseLetters = /[A-Z]/g;
		var numbers = /[0-9]/g;
		var special = /[#$^+=!*()@%&]/g;
		if (event.target.value.match(lowerCaseLetters)) {
			this.passkey = true
		}
		else {
			this.passkey = false
		}
		if (event.target.value.match(upperCaseLetters)) {
			this.passkey1 = true
		}
		else {
			this.passkey1 = false
		}
		if (event.target.value.match(numbers)) {
			this.passkey2 = true
		}
		else {
			this.passkey2 = false
		}
		if (event.target.value.length >= 8) {
			this.passkey3 = true
		}
		else {
			this.passkey3 = false
		}
		if (event.target.value.match(special)) {
			this.passkey4 = true
		}
		else {
			this.passkey4 = false
		}


	}
	// onKey2(event: any) {
	// 	var lowerCaseLetters = /[a-z]/g;
	// 	var upperCaseLetters = /[A-Z]/g;
	// 	var numbers = /[0-9]/g;
	// 	var special = /[#$^+=!*()@%&]/g;
	// 	if (event.target.value.match(lowerCaseLetters)) {
	// 		this.passlast = true
	// 	}
	// 	else {
	// 		this.passlast = false
	// 	}
	// 	if (event.target.value.match(upperCaseLetters)) {
	// 		this.passlast1 = true
	// 	}
	// 	else {
	// 		this.passlast1 = false
	// 	}
	// 	if (event.target.value.match(numbers)) {
	// 		this.passlast2 = true
	// 	}
	// 	else {
	// 		this.passlast2 = false
	// 	}
	// 	if (event.target.value.length >= 8) {
	// 		this.passlast3 = true
	// 	}
	// 	else {
	// 		this.passlast3 = false
	// 	}
	// 	if (event.target.value.match(special)) {
	// 		this.passlast4 = true
	// 	}
	// 	else {
	// 		this.passlast4 = false
	// 	}
	// }
  
	outfocus(event: any, id: any) {
		if (event) {
			$(`#${id}`).removeClass('shown')
		}

	}
  focus(event: any, id: any) {
		if (event) {
			$(`#${id}`).addClass('shown')
		}

	}

}
