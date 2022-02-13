import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';
import { PageDashboardComponent } from './views/pages/page-dashboard/page-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PageDashboardComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryRoutingModule {}
