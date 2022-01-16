import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class Paginator extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Items por página';
  override nextPageLabel = 'SIGUIENTE PÁGINA';
  override previousPageLabel = 'PÁGINA ANTERIOR';
  override firstPageLabel = 'PRIMERA PÁGINA';
  override lastPageLabel = 'ÚLTIMA PÁGINA';

  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    if (pageSize === 0 || length === 0) {
      return `0 de ${length}`;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };
}
