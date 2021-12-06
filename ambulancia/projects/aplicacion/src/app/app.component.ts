import { Component } from '@angular/core';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aplicacion';

  getInfoCourse(title: string) {
    alert('Información del curso: ' + title);
  }
}
