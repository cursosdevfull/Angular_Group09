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
    { field: ['name', 'gender'], title: 'Nombre' },
    { field: 'lastname', title: 'Apellido' },
  ];

  records = [
    { id: 1, name: 'Sergio', lastname: 'Hidalgo', gender: 'Male' },
    { id: 2, name: 'Javier', lastname: 'Luque', gender: 'Male' },
    { id: 3, name: 'Andrea', lastname: 'Veliz', gender: 'Male' },
    { id: 4, name: 'Claudia', lastname: 'Portal', gender: 'Male' },
    { id: 5, name: 'Sergio', lastname: 'Hidalgo', gender: 'Male' },
    { id: 6, name: 'Javier', lastname: 'Luque', gender: 'Male' },
    { id: 7, name: 'Andrea', lastname: 'Veliz', gender: 'Male' },
    { id: 8, name: 'Claudia', lastname: 'Portal', gender: 'Male' },
    { id: 9, name: 'Sergio', lastname: 'Hidalgo', gender: 'Male' },
    { id: 10, name: 'Javier', lastname: 'Luque', gender: 'Male' },
    { id: 11, name: 'Andrea', lastname: 'Veliz', gender: 'Male' },
    { id: 12, name: 'Claudia', lastname: 'Portal', gender: 'Male' },
    { id: 13, name: 'Sergio', lastname: 'Hidalgo', gender: 'Male' },
    { id: 14, name: 'Javier', lastname: 'Luque', gender: 'Male' },
    { id: 15, name: 'Andrea', lastname: 'Veliz', gender: 'Male' },
    { id: 16, name: 'Claudia', lastname: 'Portal', gender: 'Male' },
    { id: 17, name: 'Sergio', lastname: 'Hidalgo', gender: 'Male' },
    { id: 18, name: 'Javier', lastname: 'Luque', gender: 'Male' },
    { id: 19, name: 'Andrea', lastname: 'Veliz', gender: 'Male' },
    { id: 20, name: 'Claudia', lastname: 'Portal', gender: 'Male' },
    { id: 21, name: 'Sergio', lastname: 'Hidalgo', gender: 'Male' },
    { id: 22, name: 'Javier', lastname: 'Luque', gender: 'Male' },
    { id: 23, name: 'Andrea', lastname: 'Veliz', gender: 'Male' },
    { id: 24, name: 'Claudia', lastname: 'Portal', gender: 'Male' },
    { id: 25, name: 'Sergio', lastname: 'Hidalgo', gender: 'Male' },
    { id: 26, name: 'Javier', lastname: 'Luque', gender: 'Male' },
    { id: 27, name: 'Andrea', lastname: 'Veliz', gender: 'Male' },
    { id: 28, name: 'Claudia', lastname: 'Portal', gender: 'Male' },
    { id: 29, name: 'Sergio', lastname: 'Hidalgo', gender: 'Male' },
    { id: 30, name: 'Javier', lastname: 'Luque', gender: 'Male' },
    { id: 31, name: 'Andrea', lastname: 'Veliz', gender: 'Male' },
    { id: 32, name: 'Claudia', lastname: 'Portal', gender: 'Male' },
    { id: 33, name: 'Sergio', lastname: 'Hidalgo', gender: 'Male' },
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
