import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { RoleModel } from '../domain/role.model';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleUseCase {
  constructor(private role: RoleRepository) {}

  getByPage(page: number): Observable<Page<RoleModel>> {
    return this.role.getByPage(page);
  }

  insert(role: Partial<RoleModel>): Observable<RoleModel> {
    return this.role.insert(role);
  }
  delete(id: number): Observable<RoleModel> {
    return this.role.delete(id);
  }
  update(id: number, role: Partial<RoleModel>): Observable<RoleModel> {
    return this.role.update(id, role);
  }
  list(): Observable<RoleModel[]> {
    return this.role.list();
  }
}
