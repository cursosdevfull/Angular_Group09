import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from 'ambulancia/node_modules/@angular/common/common';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [MatTableModule, CommonModule],
  exports: [TableComponent],
})
export class TableModule {}
