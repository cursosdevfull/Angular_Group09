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
import { AuthenticationGuard } from './modules/shared/guards/authentication.guard';
import { AuthRepository } from './modules/core/application/auth.repository';
import { AuthInfraestructure } from './modules/core/infraestructure/auth.infraestructure';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthUseCase } from './modules/core/application/auth.usecase';
import { StorageRepository } from './modules/core/application/storage.repository';
import { StorageInfraestructure } from './modules/core/infraestructure/storage.infraestructure';
import { DriverRepository } from './modules/driver/application/driver.repository';
import { DriverInfraestructure } from './modules/driver/infraestructure/driver.infraestructure';
import { DriverUseCase } from './modules/driver/application/driver.usecase';
import { TokenInterceptor } from './modules/shared/interceptors/token.interceptor';

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
    HttpClientModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: Paginator },
    { provide: AuthRepository, useClass: AuthInfraestructure },
    AuthUseCase,
    { provide: DriverRepository, useClass: DriverInfraestructure },
    DriverUseCase,
    { provide: StorageRepository, useClass: StorageInfraestructure },
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    MenuService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
