import { Observable } from 'rxjs';
import { CovidModel } from '../domain/covid.model';

export abstract class CovidRepository {
  abstract getCovidData(): Observable<CovidModel[]>;
}
