import { Component } from '@angular/core';
import { TableDataService } from '@ralbx/table-data';

@Component({
  selector: 'ralbx-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss'],
})
export class TableSearchComponent {
  transactionsList$ = this.transactionsService.load();

  constructor(private transactionsService: TableDataService) {

  }
}