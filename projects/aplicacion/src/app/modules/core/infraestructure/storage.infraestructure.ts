import { StorageRepository } from '../application/storage.repository';
import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';

interface IPayload {
  name: string;
  email: string;
  roles: string[];
}

@Injectable({ providedIn: 'root' })
export class StorageInfraestructure extends StorageRepository {
  setStorage(nameProperty: string, value: string): void {
    sessionStorage.setItem(nameProperty, value);
  }
  getStorage(nameProperty: string): string {
    return sessionStorage.getItem(nameProperty) as string;
  }
  clear(): void {
    sessionStorage.clear();
  }
  getFieldInToken(fieldName: string): string | string[] {
    const accessToken = this.getStorage('accessToken');
    const payload: any = jwt_decode(accessToken) as IPayload;

    return payload[fieldName];
  }
}
