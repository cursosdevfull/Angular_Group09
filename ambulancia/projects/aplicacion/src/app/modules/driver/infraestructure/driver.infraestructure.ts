import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/aplicacion/src/environments/environment';
import { Observable } from 'rxjs';
import { StorageInfraestructure } from '../../core/infraestructure/storage.infraestructure';
import { Page } from '../../helpers/interfaces/page.interface';
import { DriverRepository } from '../application/driver.repository';
import { DriverModel } from '../domain/driver.model';

@Injectable()
export class DriverInfraestructure extends DriverRepository {
  constructor(
    private http: HttpClient,
    private storage: StorageInfraestructure
  ) {
    super();
  }
  getByPage(page: number): Observable<Page<DriverModel>> {
    const accessToken = this.storage.getStorage('accessToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });

    return this.http.get<Page<DriverModel>>(
      `${environment.apiPath}/drivers/page/${page}/${environment.pageSize}`,
      { headers }
    );
  }

  insert(driver: Partial<DriverModel>): Observable<DriverModel> {
    const accessToken = this.storage.getStorage('accessToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });
    return this.http.post<DriverModel>(
      `${environment.apiPath}/drivers`,
      driver,
      {
        headers,
      }
    );
  }

  delete(id: number): Observable<DriverModel> {
    const accessToken = this.storage.getStorage('accessToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });
    return this.http.delete<DriverModel>(
      `${environment.apiPath}/drivers/${id}`,
      { headers }
    );
  }
  update(id: number, driver: Partial<DriverModel>): Observable<DriverModel> {
    const accessToken = this.storage.getStorage('accessToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });
    return this.http.put<DriverModel>(
      `${environment.apiPath}/drivers/${id}`,
      driver,
      {
        headers,
      }
    );
  }

  list(): Observable<DriverModel[]> {
    const accessToken = this.storage.getStorage('accessToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });
    return this.http.get<DriverModel[]>(`${environment.apiPath}/drivers`, {
      headers,
    });
  }
}
