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
      name: new FormControl(
        this.data ? this.data.name : '',
        Validators.required
      ),
      lastname: new FormControl(this.data ? this.data.lastname : '', [
        Validators.required,
      ]),
    });
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
    /* if (this.group.valid) {
      alert('formulario válido');
    } else {
      alert('formulario no válido');
    } */
  }
}
