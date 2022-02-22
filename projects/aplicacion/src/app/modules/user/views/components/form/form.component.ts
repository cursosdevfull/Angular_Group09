import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleUseCase } from '../../../../role/application/role.usecase';
import { RoleModel } from '../../../../role/domain/role.model';
import { Subscription } from 'rxjs';
import { MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/tooltip';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  ],
})
export class FormComponent implements OnInit {
  title: string;
  group!: FormGroup;
  roles: RoleModel[] = [];
  suscriptionRoles: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reference: MatDialogRef<FormComponent>,
    private roleUseCase: RoleUseCase
  ) {
    this.title = data ? 'EDICIÓN' : 'NUEVO';
  }

  ngOnInit(): void {
    this.loadRoles();
    this.loadForm();
  }

  loadRoles() {
    this.suscriptionRoles = this.roleUseCase
      .list()
      .subscribe((roles: RoleModel[]) => {
        this.roles = roles;
      });
  }

  loadForm() {
    console.log(this.data);
    this.group = new FormGroup({
      id: new FormControl(this.data ? this.data.id : null),
      nombre: new FormControl(
        this.data ? this.data.nombre : '',
        Validators.required
      ),
      correo: new FormControl(this.data?.correo || '', [
        Validators.required,
        Validators.email,
      ]),
      roles: new FormControl(this.data?.roles.map((r: any) => r.id)),
    });

    if (this.data) {
      this.group.addControl('password', new FormControl(''));
    } else {
      this.group.addControl(
        'password',
        new FormControl('', Validators.required)
      );
    }
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }

  ngOnDestroy() {
    this.suscriptionRoles.unsubscribe();
  }
}
