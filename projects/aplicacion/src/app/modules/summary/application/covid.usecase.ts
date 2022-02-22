import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidModel } from '../domain/covid.model';
import { CovidRepository } from './covid.repository';

@Injectable()
export class CovidUseCase {
  constructor(private readonly covidRepository: CovidRepository) {}

  getCovidData(): Observable<CovidModel[]> {
    return this.covidRepository.getCovidData();
  }
}
