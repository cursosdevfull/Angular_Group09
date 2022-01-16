import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UtilsService } from '../../helpers/utils.service';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input() totalRecords = 0;
  @Input() pageSize = 0;
  @Input() currentPage = 0;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter();

  totalPages = 0;

  pageToGo = 1;

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
  }

  changePage(evt: PageEvent): void {
    this.onChangePage.emit(evt.pageIndex);
  }

  goToPage() {
    if (this.pageToGo <= this.totalPages) {
      this.onChangePage.emit(this.pageToGo - 1);
    } else {
      this.utilsService.showNotification(
        `Solo existen ${this.totalPages} páginas`
      );
    }
    /* console.log(this.pageToGo); */
  }

  /*   changeValue(evt: any) {
    this.pageToGo = evt.target.value.length > 0 ? +evt.target.value : 0;
  } */
}
