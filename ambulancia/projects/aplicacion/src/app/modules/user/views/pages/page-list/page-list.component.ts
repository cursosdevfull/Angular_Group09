import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../../helpers/interfaces/metadatacolumn.interface';
import { BaseComponent } from '../../../../shared/classes/base.component';
import { UtilsService } from '../../../../shared/helpers/utils.service';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent /*extends BaseComponent implements OnInit*/ {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
    { field: 'email', title: 'Correo' },
  ];
  records: any[] = [
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
    { id: 1, name: 'Sergio', email: 'email01@email.com' },
    { id: 2, name: 'Juan', email: 'email02@email.com' },
    { id: 3, name: 'Pedro', email: 'email03@email.com' },
    { id: 4, name: 'Juan', email: 'email04@email.com' },
  ];
  totalRecords = this.records.length;

  data = [];

  constructor(utilsService: UtilsService) {
    //super(utilsService, FormComponent);
  }

  /*  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.onDestroy();
  } */
}
