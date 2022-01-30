import { ComponentType } from '@angular/cdk/portal';
import { environment } from 'projects/aplicacion/src/environments/environment';
import { takeUntil } from 'rxjs';
import { MetaDataColumn } from '../../helpers/interfaces/metadatacolumn.interface';
import { Page } from '../../helpers/interfaces/page.interface';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { UtilsService } from '../helpers/utils.service';
import { BaseUseCase } from './base-usecase';
import { EndSubscription } from './endsubscription';

export abstract class BaseComponent<
  T,
  U extends BaseUseCase<T>
> extends EndSubscription {
  abstract metaDataColumns: MetaDataColumn[];
  totalRecords: number = 0;

  currentPage = 0;
  pageSize = environment.pageSize;

  data: T[] = [];
  messageToDelete = 'Esta acción no se puede deshacer, ¿está seguro?';

  constructor(
    private useCase: U,
    private utilsService: UtilsService,
    private component: any
  ) {
    super();
    this.changePage(0);
  }

  changePage(pageIndex: number) {
    this.useCase.getByPage(pageIndex).subscribe((response: Page<T>) => {
      this.data = response.records;
      this.totalRecords = response.totalRecords;
      this.currentPage = pageIndex;
    });
  }

  delete(id: number) {
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

        this.useCase.delete(id).subscribe(() => {
          this.utilsService.showNotification('Registro eliminado', {
            duration: 2000,
          });
          this.changePage(this.currentPage);
        });
      });
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
        const record = { ...response };
        delete record.id;

        if (response.id) {
          this.useCase.update(response.id, record).subscribe(() => {
            this.showMessageConfirm();
            this.changePage(this.currentPage);
          });
        } else {
          this.useCase.insert(record).subscribe(() => {
            this.showMessageConfirm();
            this.changePage(this.currentPage);
          });
        }
      });
  }

  showMessageConfirm() {
    this.utilsService.showNotification('Registro grabado', {
      duration: 2000,
    });
  }
}
