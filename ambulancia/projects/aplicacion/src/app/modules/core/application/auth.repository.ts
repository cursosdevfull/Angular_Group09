import { Observable } from 'rxjs';
import { AuthModel } from '../domain/auth.model';
import { Tokens } from '../../shared/helpers/tokens.interface';

export abstract class AuthRepository {
  abstract login(auth: AuthModel): Observable<Tokens>;
  abstract getNewAccessToken(refreshToken: string): Observable<any>;
}
