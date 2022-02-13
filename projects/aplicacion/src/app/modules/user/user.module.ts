import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { FormComponent } from './views/components/form/form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageListComponent, FormComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
