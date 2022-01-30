import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { PageListComponent } from './views/pages/page-list/page-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageListComponent,
    data: { rolesAllowed: ['ADMIN', 'OPERATOR'] },
    canActivate: [AuthorizationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
