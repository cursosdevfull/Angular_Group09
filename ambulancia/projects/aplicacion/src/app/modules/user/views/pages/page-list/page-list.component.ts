import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../../helpers/interfaces/metadatacolumn.interface';
import { BaseComponent } from '../../../../shared/classes/base.component';
import { UtilsService } from '../../../../shared/helpers/utils.service';
import { UserUseCase } from '../../../application/user.usecase';
import { UserModel } from '../../../domain/user.model';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<UserModel, UserUseCase> {
  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'correo', title: 'Correo' },
  ];

  constructor(userUseCase: UserUseCase, utilsService: UtilsService) {
    super(userUseCase, utilsService, FormComponent);
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }
}
