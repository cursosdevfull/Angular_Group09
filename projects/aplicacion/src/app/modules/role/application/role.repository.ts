import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { RoleModel } from '../domain/role.model';

export abstract class RoleRepository {
  abstract getByPage(page: number): Observable<Page<RoleModel>>;
  abstract insert(role: Partial<RoleModel>): Observable<RoleModel>;
  abstract delete(id: number): Observable<RoleModel>;
  abstract update(id: number, role: Partial<RoleModel>): Observable<RoleModel>;
  abstract list(): Observable<RoleModel[]>;
}
