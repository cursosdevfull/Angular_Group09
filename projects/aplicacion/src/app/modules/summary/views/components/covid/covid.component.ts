import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CovidUseCase } from '../../../application/covid.usecase';
import { CovidModel } from '../../../domain/covid.model';
import { DataCovid } from '../../../domain/data-covid';

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent implements OnInit {
  subscription: Subscription = new Subscription();
  dataCovid: DataCovid[] = [];

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  view: [number, number] = [700, 450];
  /*   scheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  }; */

  scheme = 'natural';

  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = 'Casos confirmados';
  xAxisLabel = 'Países';
  yScaleMin = 0;
  yScaleMax = 100000000;
  showGridLines = true;
  legend = true;
  legendPosition = "['right', 'below']";
  legendTitle = '';

  constructor(
    private covidUseCase: CovidUseCase,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const size = this.displayNameMap.get(query) ?? 'Unknown';

            if (size === 'Small') {
              this.view = [350, 220];
            } else {
              this.view = [700, 450];
            }
          }
        }
      });
  }

  ngOnInit(): void {
    this.subscription = this.covidUseCase
      .getCovidData()
      .subscribe((data: CovidModel[]) => {
        this.dataCovid = data.map((covid: CovidModel) => ({
          name: covid.countryRegion,
          value: covid.confirmed,
        }));
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
