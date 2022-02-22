import { Observable } from 'rxjs';
import { DataCovid } from '../domain/data-covid';

export abstract class SocketRepository {
  abstract listen(eventName: string): Observable<DataCovid[]>;
}
