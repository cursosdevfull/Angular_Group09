import { ComponentType } from '@angular/cdk/portal';
import { takeUntil } from 'rxjs';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { UtilsService } from '../helpers/utils.service';
import { EndSubscription } from './endsubscription';

export abstract class BaseComponent extends EndSubscription {
  messageToDelete = 'Esta acción no se puede deshacer, ¿está seguro?';

  constructor(private utilsService: UtilsService, private component: any) {
    super();
  }

  delete(row: any) {
    this.utilsService
      .showConfirm<ConfirmComponent>(
        ConfirmComponent,
        {
          disabled: true,
          width: '340px',
        },
        this.messageToDelete
      )
      .pipe(takeUntil(this.endSubscription))
      .subscribe((response) => {
        if (!response) {
          return;
        }

        this.utilsService.showNotification('Registro eliminado', {
          duration: 2000,
        });
      });

    /*     const reference: MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      { disableClose: true, width: '340px' }
    );

    reference.componentInstance.message = this.messageToDelete;

    reference.afterClosed().subscribe((data) => {
      if (!data) {
        return;
      }

      this.notification.open('Registro eliminado', '', { duration: 2000 });
    }); */
  }

  openForm<U>(row: any = null) {
    this.utilsService
      .showModal<U>(this.component, {
        disableClose: true,
        panelClass: 'modal-form',
        data: row,
      })
      .pipe(takeUntil(this.endSubscription))
      .subscribe((response) => {
        if (!response) {
          return;
        }

        this.utilsService.showNotification('Registro grabado', {
          duration: 2000,
        });
      });
  }
}
