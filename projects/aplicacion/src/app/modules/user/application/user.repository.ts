import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { UserModel } from '../domain/user.model';

export abstract class UserRepository {
  abstract getByPage(page: number): Observable<Page<UserModel>>;
  abstract insert(medic: Partial<UserModel>): Observable<UserModel>;
  abstract delete(id: number): Observable<UserModel>;
  abstract update(id: number, medic: Partial<UserModel>): Observable<UserModel>;
  abstract list(): Observable<UserModel[]>;
}
