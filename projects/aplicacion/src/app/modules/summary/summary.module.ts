import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { PageDashboardComponent } from './views/pages/page-dashboard/page-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CovidComponent } from './views/components/covid/covid.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SocketComponent } from './views/components/socket/socket.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [PageDashboardComponent, CovidComponent, SocketComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedModule,
    NgxChartsModule,
    LayoutModule,
  ],
})
export class SummaryModule {}
