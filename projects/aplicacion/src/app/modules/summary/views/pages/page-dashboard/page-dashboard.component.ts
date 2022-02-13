import { Component, OnInit } from '@angular/core';
import { ILayout } from 'projects/aplicacion/src/app/config/interfaces/layout.interface';
import { LayoutService } from 'projects/aplicacion/src/app/config/services/layout.service';
import { BaseComponent } from '../../../../shared/helpers/base-component';

@Component({
  selector: 'amb-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.css'],
})
export class PageDashboardComponent extends BaseComponent implements OnInit {
  constructor(protected override layoutService: LayoutService) {
    super(layoutService);
    /*     const options: ILayout = { header: true, menu: true };
    this.layoutService.settingConfiguration(options); */
  }

  ngOnInit(): void {}
}
