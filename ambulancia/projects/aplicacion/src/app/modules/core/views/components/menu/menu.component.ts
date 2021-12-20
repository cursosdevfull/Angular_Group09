import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../../../helpers/interfaces/menu.interface';
import { MenuService } from '../../../../helpers/services/menu.service';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  /*   menuService: MenuService;

  constructor(menuService: MenuService) {
    this.menuService = menuService;
  } */

  itemsMenu: IMenu[];

  constructor(private readonly menuService: MenuService) {
    this.itemsMenu = this.menuService.getItems();
  }

  ngOnInit(): void {}
}
