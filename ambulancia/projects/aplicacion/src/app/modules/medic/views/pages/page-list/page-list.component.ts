import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../../helpers/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
