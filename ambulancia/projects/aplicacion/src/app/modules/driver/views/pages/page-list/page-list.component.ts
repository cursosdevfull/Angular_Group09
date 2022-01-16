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

  records = [
    { id: 1, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 2, name: 'Javier', lastname: 'Luque' },
    { id: 3, name: 'Andrea', lastname: 'Veliz' },
    { id: 4, name: 'Claudia', lastname: 'Portal' },
    { id: 5, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 6, name: 'Javier', lastname: 'Luque' },
    { id: 7, name: 'Andrea', lastname: 'Veliz' },
    { id: 8, name: 'Claudia', lastname: 'Portal' },
    { id: 9, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 10, name: 'Javier', lastname: 'Luque' },
    { id: 11, name: 'Andrea', lastname: 'Veliz' },
    { id: 12, name: 'Claudia', lastname: 'Portal' },
    { id: 13, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 14, name: 'Javier', lastname: 'Luque' },
    { id: 15, name: 'Andrea', lastname: 'Veliz' },
    { id: 16, name: 'Claudia', lastname: 'Portal' },
    { id: 17, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 18, name: 'Javier', lastname: 'Luque' },
    { id: 19, name: 'Andrea', lastname: 'Veliz' },
    { id: 20, name: 'Claudia', lastname: 'Portal' },
    { id: 21, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 22, name: 'Javier', lastname: 'Luque' },
    { id: 23, name: 'Andrea', lastname: 'Veliz' },
    { id: 24, name: 'Claudia', lastname: 'Portal' },
    { id: 25, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 26, name: 'Javier', lastname: 'Luque' },
    { id: 27, name: 'Andrea', lastname: 'Veliz' },
    { id: 28, name: 'Claudia', lastname: 'Portal' },
    { id: 29, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 30, name: 'Javier', lastname: 'Luque' },
    { id: 31, name: 'Andrea', lastname: 'Veliz' },
    { id: 32, name: 'Claudia', lastname: 'Portal' },
    { id: 33, name: 'Sergio', lastname: 'Hidalgo' },
  ];

  totalRecords = this.records.length;

  constructor(utilsService: UtilsService) {
    super(utilsService, FormComponent);
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }
}
