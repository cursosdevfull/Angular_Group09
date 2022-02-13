import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, throwError, retry, mergeMap } from 'rxjs';
import { StorageInfraestructure } from '../../core/infraestructure/storage.infraestructure';
import { AuthUseCase } from '../../core/application/auth.usecase';
import { Tokens } from '../helpers/tokens.interface';
import { UtilsService } from '../helpers/utils.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private storage: StorageInfraestructure,
    private injector: Injector,
    private utilsService: UtilsService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /*     if (req.url.includes('/drivers')) {
      return next.handle(req);
    } */
    const authUseCase: AuthUseCase = this.injector.get(AuthUseCase);
    const accessToken = this.storage.getStorage('accessToken');

    const requestCloned = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(requestCloned).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          console.log('Error de frontend');
          errorMessage = error.error.message;
        } else {
          console.log('Error de backend');
          errorMessage = error.error.name ? error.error.name : error.message;

          if (error.status === 409) {
            const refreshToken = this.storage.getStorage('refreshToken');

            return authUseCase.getNewAccessToken(refreshToken).pipe(
              retry(3),
              mergeMap((response: Tokens) => {
                this.storage.setStorage('accessToken', response.accessToken);

                const requestCloned = req.clone({
                  headers: req.headers.append(
                    'Authorization',
                    `Bearer ${response.accessToken}`
                  ),
                });

                return next.handle(requestCloned);
              })
            );
          } else if (error.status === 401) {
            this.utilsService.showNotification(
              'Ocurrió un error. Inténtelo más tarde'
            );
            return authUseCase.logout();
          }
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
