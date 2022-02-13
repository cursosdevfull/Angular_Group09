import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MetaDataColumn } from '../../../../helpers/interfaces/metadatacolumn.interface';
import { BaseComponent } from '../../../../shared/classes/base.component';
import { UtilsService } from '../../../../shared/helpers/utils.service';
import { MedicUseCase } from '../../../application/medic.usecase';
import { MedicModel } from '../../../domain/medic.model';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<MedicModel, MedicUseCase> {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'apellido', title: 'Apellido' },
    { field: 'cmp', title: 'Registro Profesional' },
  ];

  constructor(medicUseCase: MedicUseCase, utilsService: UtilsService) {
    super(medicUseCase, utilsService, FormComponent);
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }
}
