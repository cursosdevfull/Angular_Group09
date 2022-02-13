import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageLoginComponent } from './modules/core/views/pages/page-login/page-login.component';
import { AuthenticationGuard } from './modules/shared/guards/authentication.guard';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'driver',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'history',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'medic',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/medic/medic.module').then((m) => m.MedicModule),
  },
  {
    path: 'summary',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/summary/summary.module').then((m) => m.SummaryModule),
  },
  {
    path: 'user',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
