import { Injectable } from '@angular/core';
// import { data } from 'jquery';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ApiService} from './api.service'
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuthenticatedSubject=new ReplaySubject <boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  private currentUserDetails=new BehaviorSubject <any>(1);
  public currentuserSubject = this.currentUserDetails.asObservable();
  

  constructor( private apiservice:ApiService,private http: HttpClient,private jwtService:JwtService) { }
  
  setAuth(user)
  {
   this.currentUserDetails.next(user)
   this.jwtService.saveToken(user.token)
  }

  clearLocalStorage()
  {
    this.jwtService.destroyToken()
  }


  springCreateUser(obj:any)
  {
    return this.apiservice.get('/api/getAllUser').pipe(map(data=>{return data;}));
  }

  authSession(obj)
  {
    return this.apiservice.post('/api/authSession',obj).pipe(map(data=>{
      if(data.item)
      this.setAuth(data.item)
      return data;}));
  }

  createUser(obj:any)
  {
    return this.apiservice.post('/api/createUser',obj).pipe(map(data=>{return data;}));
  }
  saveLoginCred(obj:any)
  {
    return this.apiservice.post('/api/saveLoginCred',obj).pipe(map(data=>{return data;}));
  } 
  
  getUserProfile()
  {
    return this.apiservice.post('/api/getUserProfile').pipe(map(data=>{return data;}));
  }
  updateUserProfile(editDetails)
  {
    return this.apiservice.post('/api/updateUserProfile',editDetails).pipe(map(data=>{return data;}));
  }
// =========================================================================================>
  post(obj : any)
  {
    return this.http.post("http://localhost:3000/signupDetails", obj).pipe(map(result => {return result}))
  }
  get()
  {
    return this.http.get("http://localhost:3000/signupDetails").pipe(map(data => {return data}))
  }
  update(obj : any)
  {
    return this.http.put("http://localhost:3000/signupDetails", obj).pipe(map(result => {return result}))
  }
  delete(obj : any)
  {
    return this.http.delete("http://localhost:3000/signupDetails", obj).pipe(map(result => {return result}))
  }
}
