import { Injectable } from '@angular/core';
// import { data } from 'jquery';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ApiService} from './api.service'
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuthenticatedSubject=new ReplaySubject <boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  private currentUserDetails=new BehaviorSubject <any>(1);
  public currentuserSubject = this.currentUserDetails.asObservable();
  

  constructor( private apiservice:ApiService,private http: HttpClient) { }
  
  springCreateUser(obj:any)
  {
    return this.apiservice.get('/getAllUser').pipe(map(data=>{return data;}));
  }
  authSession(obj)
  {
    return this.apiservice.post('/authSession',obj).pipe(map(data=>{return data;}));
  }

  createUser(obj:any)
  {
    return this.apiservice.post('/createUser',obj).pipe(map(data=>{return data;}));
  }
  saveLoginCred(obj:any)
  {
    return this.apiservice.post('/saveLoginCred',obj).pipe(map(data=>{return data;}));
  }

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
  editUser(obj)
  {

  }
  changePassword()
  {
    
  }
}
