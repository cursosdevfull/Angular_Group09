import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { PageDashboardComponent } from './views/pages/page-dashboard/page-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageDashboardComponent],
  imports: [CommonModule, SummaryRoutingModule, SharedModule],
})
export class SummaryModule {}
