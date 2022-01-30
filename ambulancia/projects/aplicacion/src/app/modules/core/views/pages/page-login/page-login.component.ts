import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'projects/aplicacion/src/app/config/services/layout.service';
import { ILayout } from '../../../../../config/interfaces/layout.interface';
import { AuthUseCase } from '../../../application/auth.usecase';
import { AuthModel } from '../../../domain/auth.model';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private authUseCase: AuthUseCase
  ) {
    const options: ILayout = { header: false, menu: false };
    this.layoutService.settingConfiguration(options);
  }

  ngOnInit(): void {}

  login(authModel: AuthModel): void {
    this.authUseCase.login(authModel);
  }
}
