import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanLoad {
  constructor(private authUseCase: AuthUseCase, private router: Router) {}

  canActivate(): boolean {
    const isUserLogged = this.authUseCase.isAuthenticated;
    if (!isUserLogged) {
      this.router.navigate(['/']);
    }
    return isUserLogged;
  }

  canLoad(): boolean {
    return this.canActivate();
  }
}
