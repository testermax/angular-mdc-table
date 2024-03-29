import { Component } from '@angular/core';

interface Transaction {
  item: string;
  cost: number;
}

/**
 * @title Footer row table
 */
@Component({
  selector: 'table-footer-row-example',
  styleUrls: ['table-footer-row-example.scss'],
  templateUrl: 'table-footer-row-example.html',
})
export class TableFooterRowExample {
  hide = true;
  displayedColumns: string[] = ['item', 'cost', 'menu', 'more'];
  transactions: Transaction[] = [
    { item: 'Beach ball', cost: 4 },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 },
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
