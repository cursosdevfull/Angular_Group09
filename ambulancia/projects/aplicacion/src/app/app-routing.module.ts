import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageLoginComponent } from './modules/core/views/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'driver',
    loadChildren: () =>
      import('./modules/driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./modules/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'medic',
    loadChildren: () =>
      import('./modules/medic/medic.module').then((m) => m.MedicModule),
  },
  {
    path: 'summary',
    loadChildren: () =>
      import('./modules/summary/summary.module').then((m) => m.SummaryModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
