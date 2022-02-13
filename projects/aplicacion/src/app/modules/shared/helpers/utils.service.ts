import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

interface Message {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private dialog: MatDialog, private notification: MatSnackBar) {}

  showConfirm<T extends Message>(
    componentToShow: ComponentType<T>,
    options: object,
    message: string
  ): Observable<any> {
    const reference: MatDialogRef<T> = this.dialog.open(
      componentToShow,
      options
    );

    if (!message) {
      reference.componentInstance.message = message;
    }

    return reference.afterClosed();
  }

  showNotification(message: string, options: object = { duration: 2000 }) {
    this.notification.open(message, '', options);
  }

  showModal<T>(
    componentToShow: ComponentType<T>,
    options: object
  ): Observable<any> {
    const reference: MatDialogRef<T> = this.dialog.open(
      componentToShow,
      options
    );

    return reference.afterClosed();
  }
}
