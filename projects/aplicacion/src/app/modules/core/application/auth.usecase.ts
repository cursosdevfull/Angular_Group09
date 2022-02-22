import { Injectable } from '@angular/core';
import { AuthModel } from '../domain/auth.model';
import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';
import { Tokens } from '../../shared/helpers/tokens.interface';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthUseCase {
  private userLogged = false;

  constructor(
    private repository: AuthRepository,
    private storage: StorageRepository,
    private router: Router
  ) {}

  login(auth: AuthModel) {
    this.repository.login(auth).subscribe((response: Tokens) => {
      this.storage.setStorage('accessToken', response.accessToken);
      this.storage.setStorage('refreshToken', response.refreshToken);
      this.userLogged = true;
      this.router.navigate(['/summary']);
    });
  }

  logout(): Observable<any> {
    this.storage.clear();
    this.userLogged = false;
    this.router.navigate(['/']);
    return of();
  }

  get isAuthenticated(): boolean {
    return this.userLogged || !!this.storage.getStorage('accessToken');
  }

  isAuthorized(rolesAllowed: string[]): boolean {
    const userRoles = this.storage.getFieldInToken('roles') as string[];
    if (!userRoles || userRoles.length === 0) {
      return false;
    }
    return rolesAllowed.some((role) => userRoles.includes(role));
  }

  getNewAccessToken(refreshToken: string): Observable<Tokens> {
    return this.repository.getNewAccessToken(refreshToken);
  }

  getRoles() {
    return this.storage.getFieldInToken('roles') as string[];
  }
}
