import { IMenu } from '../interfaces/menu.interface';

export class MenuService {
  private menu: IMenu[] = [
    { title: 'Resumen', url: '/summary', icon: 'done' },
    { title: 'Pilotos', url: '/driver', icon: 'done' },
    { title: 'Historias', url: '/history', icon: 'edit' },
    { title: 'Médicos', url: '/medic', icon: 'face' },
    { title: 'Usuarios', url: '/user', icon: 'account_circle' },
    {
      title: 'Reportes',
      url: '/report',
      icon: 'done',
      children: [
        { title: 'Reporte 1', url: '/report/report1', icon: 'done' },
        { title: 'Reporte 2', url: '/report/report2', icon: 'done' },
      ],
    },
  ];

  getItems(): IMenu[] {
    return [...this.menu];
  }

  getItemOne(path: string): IMenu {
    const item: IMenu = this.menu.find((item) => item.url === path) as IMenu;
    return { ...item };
  }
}
