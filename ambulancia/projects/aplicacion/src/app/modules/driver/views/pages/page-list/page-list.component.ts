import { Component } from '@angular/core';
import { MetaDataColumn } from '../../../../helpers/interfaces/metadatacolumn.interface';
import { BaseComponent } from '../../../../shared/classes/base.component';
import { UtilsService } from '../../../../shared/helpers/utils.service';
import { DriverUseCase } from '../../../application/driver.usecase';
import { DriverModel } from '../../../domain/driver.model';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<
  DriverModel,
  DriverUseCase
> {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
  ];

  constructor(driverUseCase: DriverUseCase, utilsService: UtilsService) {
    super(driverUseCase, utilsService, FormComponent);
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }
}
