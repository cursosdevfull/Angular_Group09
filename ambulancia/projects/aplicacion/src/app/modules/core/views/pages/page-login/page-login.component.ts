import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/aplicacion/src/app/config/services/layout.service';
import { ILayout } from '../../../../../config/interfaces/layout.interface';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(private layoutService: LayoutService) {
    const options: ILayout = { header: false, menu: false };
    this.layoutService.settingConfiguration(options);
  }

  ngOnInit(): void {}
}
