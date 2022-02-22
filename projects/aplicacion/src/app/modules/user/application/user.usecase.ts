import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { UserModel } from '../domain/user.model';
import { UserRepository } from './user.repository';

@Injectable()
export class UserUseCase {
  constructor(private user: UserRepository) {}

  getByPage(page: number): Observable<Page<UserModel>> {
    return this.user.getByPage(page);
  }

  insert(user: Partial<UserModel>): Observable<UserModel> {
    return this.user.insert(user);
  }
  delete(id: number): Observable<UserModel> {
    return this.user.delete(id);
  }
  update(id: number, user: Partial<UserModel>): Observable<UserModel> {
    return this.user.update(id, user);
  }
  list(): Observable<UserModel[]> {
    return this.user.list();
  }
}
