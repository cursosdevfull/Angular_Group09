import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { MedicModel } from '../domain/medic.model';
import { MedicRepository } from './medic.repository';

@Injectable()
export class MedicUseCase {
  constructor(private medic: MedicRepository) {}

  getByPage(page: number): Observable<Page<MedicModel>> {
    return this.medic.getByPage(page);
  }

  insert(medic: Partial<MedicModel>): Observable<MedicModel> {
    return this.medic.insert(medic);
  }
  delete(id: number): Observable<MedicModel> {
    return this.medic.delete(id);
  }
  update(id: number, medic: Partial<MedicModel>): Observable<MedicModel> {
    return this.medic.update(id, medic);
  }
  list(): Observable<MedicModel[]> {
    return this.medic.list();
  }
}
