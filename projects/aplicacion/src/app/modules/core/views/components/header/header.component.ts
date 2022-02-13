import { Component, OnInit } from '@angular/core';
import { AuthUseCase } from '../../../application/auth.usecase';
import { StorageInfraestructure } from '../../../infraestructure/storage.infraestructure';
import info from '../../../../../../assets/parameters.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username = '';

  constructor(
    private authUseCase: AuthUseCase,
    storage: StorageInfraestructure,
    private http: HttpClient
  ) {
    this.username = storage.getFieldInToken('name') as string;
    console.log(info);
    this.http.get('assets/data.json').subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}

  logout() {
    this.authUseCase.logout();
  }
}
