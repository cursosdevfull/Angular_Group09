import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketUseCase } from '../../../application/socket.usecase';
import { DataCovid } from '../../../domain/data-covid';

@Component({
  selector: 'amb-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent implements OnInit {
  subscription: Subscription = new Subscription();
  dataCovid: DataCovid[] = [];

  view: [number, number] = [700, 450];
  scheme = 'natural';

  legend = true;
  legendPosition = ['right', 'below'];
  legendTitle = 'Vacunas';
  gradient = true;
  doughnut = true;

  constructor(private socketUseCase: SocketUseCase) {}

  ngOnInit(): void {
    this.subscription = this.socketUseCase
      .listen('dataupdate')
      .subscribe((data: DataCovid[]) => (this.dataCovid = data));
  }
}
