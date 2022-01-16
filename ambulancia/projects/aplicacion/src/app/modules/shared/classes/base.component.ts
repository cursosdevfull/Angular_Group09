import { ComponentType } from '@angular/cdk/portal';
import { takeUntil } from 'rxjs';
import { MetaDataColumn } from '../../helpers/interfaces/metadatacolumn.interface';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { UtilsService } from '../helpers/utils.service';
import { EndSubscription } from './endsubscription';

export abstract class BaseComponent extends EndSubscription {
  abstract metaDataColumns: MetaDataColumn[];
  abstract records: any[];
  abstract totalRecords: number;

  currentPage = 0;
  pageSize = 30;

  data: any = [];
  messageToDelete = 'Esta acción no se puede deshacer, ¿está seguro?';

  constructor(private utilsService: UtilsService, private component: any) {
    super();
  }

  loadData() {
    this.data = this.records.slice(
      this.currentPage * this.pageSize,
      (this.currentPage + 1) * this.pageSize
    );
  }

  changePage(pageIndex: number) {
    this.currentPage = pageIndex;
    this.loadData();
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

        if (response.id) {
          const recordMatched = this.records.find(
            (el) => el.id === response.id
          );
          if (recordMatched) {
            recordMatched.name = response.name;
            recordMatched.lastname = response.lastname;
          }
        } else {
          response.id = this.totalRecords;
          this.records.push(response);
          this.totalRecords++;
        }

        this.utilsService.showNotification('Registro grabado', {
          duration: 2000,
        });
      });
  }
}
