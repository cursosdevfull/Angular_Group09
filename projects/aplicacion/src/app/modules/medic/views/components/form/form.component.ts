import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'amb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  title: string;
  group!: FormGroup;
  photoToShow = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reference: MatDialogRef<FormComponent>
  ) {
    this.title = data ? 'EDICIÓN' : 'NUEVO';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data ? this.data.id : null),
      nombre: new FormControl(
        this.data ? this.data.nombre : '',
        Validators.required
      ),
      segundo_nombre: new FormControl(
        this.data?.segundo_nombre || '',
        Validators.required
      ),
      apellido: new FormControl(
        this.data ? this.data.apellido : '',
        Validators.required
      ),
      cmp: new FormControl(this.data ? this.data.cmp : '', Validators.required),
      dni: new FormControl(this.data ? this.data.dni : '', Validators.required),
      correo: new FormControl(
        this.data ? this.data.correo : '',
        Validators.required
      ),
    });

    if (this.data) {
      this.group.addControl('foto', new FormControl());
      if (this.data.foto) {
        this.photoToShow = this.data.foto;
      }
    } else {
      this.group.addControl('foto', new FormControl(null, Validators.required));
    }
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }
}
