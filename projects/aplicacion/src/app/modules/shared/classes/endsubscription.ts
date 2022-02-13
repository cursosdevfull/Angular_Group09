import { Subject } from 'rxjs';

export class EndSubscription {
  protected readonly endSubscription: Subject<void> = new Subject();

  onDestroy() {
    this.endSubscription.next();
    this.endSubscription.complete();
  }
}
