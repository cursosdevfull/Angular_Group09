import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerComponent } from './components/container/container.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    ConfirmComponent,
    MatDialogModule,
  ],
})
export class SharedModule {}
