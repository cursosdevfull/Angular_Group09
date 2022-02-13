import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormComponent } from './views/components/form/form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageListComponent, FormComponent],
  imports: [CommonModule, HistoryRoutingModule, SharedModule],
})
export class HistoryModule {}
