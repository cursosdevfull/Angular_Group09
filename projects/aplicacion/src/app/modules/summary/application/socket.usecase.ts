import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCovid } from '../domain/data-covid';
import { SocketRepository } from './socket.repository';

@Injectable()
export class SocketUseCase {
  constructor(private readonly socketRepository: SocketRepository) {}

  listen(eventName: string): Observable<DataCovid[]> {
    return this.socketRepository.listen(eventName);
  }
}
