import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu } from '../../../helpers/interfaces/menu.interface';
import { MenuService } from '../../../helpers/services/menu.service';

@Component({
  selector: 'amb-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  path: IMenu;

  constructor(
    private readonly menuService: MenuService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    const currentPath =
      '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = this.menuService.getItemOne(currentPath);
  }

  ngOnInit(): void {}
}
