import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'amb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() title!: string;
  @Output() onShowInfo: EventEmitter<string> = new EventEmitter<string>();

  name = 'Curso Angular PRO 13';
  currentDate = new Date();

  getDateTimeUTC() {
    return this.currentDate.toUTCString();
  }

  showAlert() {
    this.onShowInfo.emit(this.title);
    // alert('Título del curso: ' + this.title);
  }
}
