import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/aplicacion/src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { UserRepository } from '../application/user.repository';
import { UserModel } from '../domain/user.model';

@Injectable()
export class UserInfraestructure extends UserRepository {
  constructor(private http: HttpClient) {
    super();
  }
  getByPage(page: number): Observable<Page<UserModel>> {
    return this.http.get<Page<UserModel>>(
      `${environment.apiPath}/users/page/${page}/${environment.pageSize}`
    );
  }

  insert(user: Partial<UserModel>): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.apiPath}/users`, user);
  }

  delete(id: number): Observable<UserModel> {
    return this.http.delete<UserModel>(`${environment.apiPath}/users/${id}`);
  }
  update(id: number, user: Partial<UserModel>): Observable<UserModel> {
    return this.http.put<UserModel>(`${environment.apiPath}/users/${id}`, user);
  }

  list(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.apiPath}/users`);
  }
}
