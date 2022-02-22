import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/aplicacion/src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { RoleRepository } from '../application/role.repository';
import { RoleModel } from '../domain/role.model';

@Injectable()
export class RoleInfraestructure extends RoleRepository {
  constructor(private http: HttpClient) {
    super();
  }
  getByPage(page: number): Observable<Page<RoleModel>> {
    return this.http.get<Page<RoleModel>>(
      `${environment.apiPath}/roles/page/${page}/${environment.pageSize}`
    );
  }

  insert(role: Partial<RoleModel>): Observable<RoleModel> {
    return this.http.post<RoleModel>(`${environment.apiPath}/roles`, role);
  }

  delete(id: number): Observable<RoleModel> {
    return this.http.delete<RoleModel>(`${environment.apiPath}/roles/${id}`);
  }
  update(id: number, role: Partial<RoleModel>): Observable<RoleModel> {
    return this.http.put<RoleModel>(`${environment.apiPath}/roles/${id}`, role);
  }

  list(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(`${environment.apiPath}/roles`);
  }
}
