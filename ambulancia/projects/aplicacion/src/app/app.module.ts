import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { MenuService } from './modules/helpers/services/menu.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './modules/shared/classes/paginator';
import { LayoutModule } from './config/modules/layout.module';
import { LAYOUT_CONSTANTS } from './config/constants/layout.constants';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    CoreModule,
    MatDialogModule,
    MatSnackBarModule,
    LayoutModule.forRoot(LAYOUT_CONSTANTS),
  ],
  providers: [
    // {provide: MenuService, useClass: MenuService}
    // { provide: UtilsService, useClass: UtilsService },
    { provide: MatPaginatorIntl, useClass: Paginator },
    MenuService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
