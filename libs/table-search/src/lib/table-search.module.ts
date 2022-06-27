import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSearchComponent } from './table-search/table-search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableSearchComponent],
  exports: [TableSearchComponent],
})
export class TableSearchModule {}
