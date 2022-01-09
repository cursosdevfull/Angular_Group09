import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MetaDataColumn } from '../../../../helpers/interfaces/metadatacolumn.interface';
import { ConfirmComponent } from '../../../../shared/components/confirm/confirm.component';

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

  constructor(private dialog: MatDialog, private notification: MatSnackBar) {}

  ngOnInit(): void {}

  delete(row: any) {
    const reference: MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      { disableClose: true, width: '340px' }
    );

    reference.componentInstance.message =
      'Esta acción no se puede deshacer, ¿está seguro?';

    reference.afterClosed().subscribe((data) => {
      if (!data) {
        return;
      }

      this.notification.open('Registro eliminado', '', { duration: 2000 });

      //alert('Registro eliminado');
    });

    /* if (confirm('¿Quiere eliminar este registro?')) {
      alert('Registro eliminado');
    } */
  }
}
