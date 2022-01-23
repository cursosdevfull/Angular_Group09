import { Component } from '@angular/core';
import { ILayout } from './config/interfaces/layout.interface';
import { LayoutService } from './config/services/layout.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aplicacion';
  config: ILayout = { header: false, menu: false };

  constructor(private layoutService: LayoutService) {
    this.layoutService.gettingConfiguration().subscribe((config: ILayout) => {
      this.config = config;
      console.log(this.config);
    });
  }

  getInfoCourse(title: string) {
    alert('Información del curso: ' + title);
  }
}
