import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/aplicacion/src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { MedicRepository } from '../application/medic.repository';
import { MedicModel } from '../domain/medic.model';

@Injectable()
export class MedicInfraestructure extends MedicRepository {
  constructor(private http: HttpClient) {
    super();
  }
  getByPage(page: number): Observable<Page<MedicModel>> {
    return this.http.get<Page<MedicModel>>(
      `${environment.apiPath}/medics/page/${page}/${environment.pageSize}`
    );
  }

  insert(medic: Partial<MedicModel>): Observable<MedicModel> {
    return this.http.post<MedicModel>(`${environment.apiPath}/medics`, medic);
  }

  delete(id: number): Observable<MedicModel> {
    return this.http.delete<MedicModel>(`${environment.apiPath}/medics/${id}`);
  }
  update(id: number, medic: Partial<MedicModel>): Observable<MedicModel> {
    return this.http.put<MedicModel>(
      `${environment.apiPath}/medics/${id}`,
      medic
    );
  }

  list(): Observable<MedicModel[]> {
    return this.http.get<MedicModel[]>(`${environment.apiPath}/medics`);
  }
}
