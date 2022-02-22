import { Injectable } from '@angular/core';
import { SocketRepository } from '../application/socket.repository';
import * as io from 'socket.io-client';
import { environment } from 'projects/aplicacion/src/environments/environment';
import { Observable, Observer } from 'rxjs';
import { DataCovid } from '../domain/data-covid';

@Injectable()
export class SocketInfraestructure extends SocketRepository {
  socket: any;

  constructor() {
    super();
    this.socket = io.connect(environment.socketPath);
  }

  listen(eventName: string): Observable<DataCovid[]> {
    return new Observable((observer: Observer<DataCovid[]>) => {
      this.socket.on(eventName, (result: DataCovid[]) => {
        console.log('result: ', result);
        observer.next(result);
      });
    });
  }
}
