/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice';
import { Observable, } from "rxjs";
import { Product } from '../product';
import { Table } from 'primeng/table';
import { SortEvent } from 'primeng/api';


@Component({
  selector: 'ralbx-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  //products1: Observable<Product[]> = [];

  products1!: Product[] | void;

  products2!: Product[] | void;

  products3!: Product[] | void;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(data => this.products1 = data);
    this.productService.getProductsSmall().then(data => this.products2 = data);
    this.productService.getProductsSmall().then(data => this.products3 = data);
  }

  customSort(event: SortEvent) {
    event.data?.sort((data1, data2) => {
      const value1 = data1[event.field ?? 0];
      const value2 = data2[event.field ?? 0];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order ?? 0 * result);
    });
  }
}