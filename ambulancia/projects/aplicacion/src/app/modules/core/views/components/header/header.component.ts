import { Component, OnInit } from '@angular/core';
import { AuthUseCase } from '../../../application/auth.usecase';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authUseCase: AuthUseCase) {}

  ngOnInit(): void {}

  logout() {
    this.authUseCase.logout();
  }
}
