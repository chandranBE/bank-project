import { Injectable,AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from './user/user.module';
import { UserService } from './user.service';
 class Permissions {
  canGoToRoute(user: User, id: string): boolean {
    return true;
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private userService: UserService
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
//return;
  return this.userService.isAuthenticated.take(1);
  }
  
}
