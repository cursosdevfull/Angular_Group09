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
  ];

  data = [
    { id: 1, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 2, name: 'Juan', lastname: 'Perez' },
    { id: 3, name: 'Pedro', lastname: 'Gonzalez' },
  ];

  constructor(utilsService: UtilsService) {
    super(utilsService, FormComponent);
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }
}
