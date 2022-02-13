import { Observable } from 'rxjs';
import { Page } from '../../helpers/interfaces/page.interface';

export interface BaseUseCase<T> {
  getByPage(page: number): Observable<Page<T>>;
  insert(driver: Partial<T>): Observable<T>;
  delete(id: number): Observable<T>;
  update(id: number, driver: Partial<T>): Observable<T>;
  list(): Observable<T[]>;
}
