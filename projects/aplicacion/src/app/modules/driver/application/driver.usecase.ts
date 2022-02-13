import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';
import { DriverModel } from '../domain/driver.model';
import { DriverRepository } from './driver.repository';

@Injectable()
export class DriverUseCase {
  constructor(private driver: DriverRepository) {}

  getByPage(page: number): Observable<Page<DriverModel>> {
    return this.driver.getByPage(page);
  }

  insert(driver: Partial<DriverModel>): Observable<DriverModel> {
    return this.driver.insert(driver);
  }
  delete(id: number): Observable<DriverModel> {
    return this.driver.delete(id);
  }
  update(id: number, driver: Partial<DriverModel>): Observable<DriverModel> {
    return this.driver.update(id, driver);
  }
  list(): Observable<DriverModel[]> {
    return this.driver.list();
  }
}
