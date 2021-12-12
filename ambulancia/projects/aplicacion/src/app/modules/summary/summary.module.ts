import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { PageDashboardComponent } from './views/pages/page-dashboard/page-dashboard.component';


@NgModule({
  declarations: [
    PageDashboardComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
