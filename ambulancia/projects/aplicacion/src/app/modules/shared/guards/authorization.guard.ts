import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private authUseCase: AuthUseCase) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isUserAuthorized = this.authUseCase.isAuthorized(
      (route.data as any).rolesAllowed
    );
    if (!isUserAuthorized) {
      this.authUseCase.logout();
      return false;
    }
    return true;
  }
}
