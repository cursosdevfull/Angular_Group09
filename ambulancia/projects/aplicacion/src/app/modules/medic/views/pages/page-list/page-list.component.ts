import { Component } from '@angular/core';
import { MetaDataColumn } from '../../../../helpers/interfaces/metadatacolumn.interface';
import { BaseComponent } from '../../../../shared/classes/base.component';
import { UtilsService } from '../../../../shared/helpers/utils.service';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
    { field: 'lastname', title: 'Apellido' },
    { field: 'cmp', title: 'Registro Profesional' },
  ];

  data = [
    { id: 1, name: 'Sergio', lastname: 'Hidalgo', cmp: 20234 },
    { id: 2, name: 'Juan', lastname: 'Perez', cmp: 34534 },
    { id: 3, name: 'Pedro', lastname: 'Gonzalez', cmp: 22345 },
  ];

  override messageToDelete = '¿Está seguro?';

  constructor(utilsService: UtilsService) {
    super(utilsService, FormComponent);
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }
}
