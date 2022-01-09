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
  ];

  data = [
    { id: 1, name: 'Sergio', lastname: 'Hidalgo' },
    { id: 2, name: 'Juan', lastname: 'Perez' },
    { id: 3, name: 'Pedro', lastname: 'Gonzalez' },
  ];

  constructor() {}

  ngOnInit(): void {}

  delete(row: any) {
    if (confirm('¿Quiere eliminar este registro?')) {
      alert('Registro eliminado');
    }
  }
}
