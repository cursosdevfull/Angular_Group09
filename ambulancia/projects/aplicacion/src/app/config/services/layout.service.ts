import { Inject, Injectable } from '@angular/core';
import { ILayout } from '../interfaces/layout.interface';
import { LAYOUT_TOKEN } from '../tokens/layout.token';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private configSubject: BehaviorSubject<ILayout>;

  constructor(@Inject(LAYOUT_TOKEN) private config: ILayout) {
    this.configSubject = new BehaviorSubject<ILayout>(config);
  }

  settingConfiguration(value: ILayout) {
    let config = this.configSubject.getValue();
    config = Object.assign(config, value);
    this.configSubject.next(config);
  }

  gettingConfiguration(): Observable<ILayout> {
    return this.configSubject.asObservable();
  }
}
