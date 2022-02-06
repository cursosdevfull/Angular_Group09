import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/aplicacion/src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { DriverRepository } from '../application/driver.repository';
import { DriverModel } from '../domain/driver.model';

@Injectable()
export class DriverInfraestructure extends DriverRepository {
  constructor(private http: HttpClient) {
    super();
  }
  getByPage(page: number): Observable<Page<DriverModel>> {
    return this.http.get<Page<DriverModel>>(
      `${environment.apiPath}/drivers/page/${page}/${environment.pageSize}`
    );
  }

  insert(driver: Partial<DriverModel>): Observable<DriverModel> {
    return this.http.post<DriverModel>(
      `${environment.apiPath}/drivers`,
      driver
    );
  }

  delete(id: number): Observable<DriverModel> {
    return this.http.delete<DriverModel>(
      `${environment.apiPath}/drivers/${id}`
    );
  }
  update(id: number, driver: Partial<DriverModel>): Observable<DriverModel> {
    return this.http.put<DriverModel>(
      `${environment.apiPath}/drivers/${id}`,
      driver
    );
  }

  list(): Observable<DriverModel[]> {
    return this.http.get<DriverModel[]>(`${environment.apiPath}/drivers`);
  }
}
