import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(): boolean {
    return false;
  }
}
