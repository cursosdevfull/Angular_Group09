import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../../helpers/interfaces/metadatacolumn.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() metaDataColumns: MetaDataColumn[] = [];
  @Input() data: any = [];
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  listFields: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(values: SimpleChanges): void {
    if (values['metaDataColumns']) {
      this.listFields = values['metaDataColumns'].currentValue.map(
        (el: MetaDataColumn) => {
          if (Array.isArray(el.field)) {
            return el.field[0];
          }
          return el.field;
        }
      );
    }
  }

  ngAfterContentInit(): void {
    if (!this.columnsDef) {
      return;
    }

    this.columnsDef.forEach((columnDef: MatColumnDef) => {
      this.listFields.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    });
  }

  getNameColumn(field: string | string[]) {
    return Array.isArray(field) ? field[0] : field;
  }

  isArray(field: string | string[]) {
    return Array.isArray(field);
  }
}
