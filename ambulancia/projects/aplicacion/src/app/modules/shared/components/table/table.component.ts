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
        (el: MetaDataColumn) => el.field
      );
    }
  }

  ngAfterContentInit(): void {
    console.log('this.columnsDef', this.columnsDef);
    if (!this.columnsDef) {
      return;
    }

    console.log(this.columnsDef);

    this.columnsDef.forEach((columnDef: MatColumnDef) => {
      this.listFields.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    });
  }
}
