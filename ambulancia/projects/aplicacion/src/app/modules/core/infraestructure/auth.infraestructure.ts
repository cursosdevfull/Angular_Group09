import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Tokens } from '../../shared/helpers/tokens.interface';
import { AuthRepository } from '../application/auth.repository';
import { AuthModel } from '../domain/auth.model';

@Injectable()
export class AuthInfraestructure extends AuthRepository {
  constructor(private http: HttpClient) {
    super();
  }

  login(auth: AuthModel): Observable<Tokens> {
    // auth = {correo: "...", password: "..."}
    return this.http.post<Tokens>(environment.apiPath + '/users/login', auth);
  }

  getNewAccessToken(refreshToken: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
