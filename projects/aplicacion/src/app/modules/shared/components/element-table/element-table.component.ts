import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amb-element-table',
  templateUrl: './element-table.component.html',
  styleUrls: ['./element-table.component.css'],
})
export class ElementTableComponent implements OnInit {
  @Input() row: any;
  @Input() column: any;
  constructor() {}

  ngOnInit(): void {}

  convertToArray(field: string | string[]): string[] {
    const elements = [];
    if (Array.isArray(field)) {
      for (const el of field) {
        elements.push(el);
      }
    }

    return elements;
  }
}
