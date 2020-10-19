import { Component, ViewEncapsulation } from '@angular/core';
import { recentSales } from "../../data/data"

@Component({
  selector: 'app-root',
  styleUrls: ['opensource-demo.css'], 
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'opensource-demo.html'
})
export class OpenSourceDemo {
  editing = {};
  rows = recentSales;
  loadingIndicator = true;
  reorderable = true;

    updateValue(event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    }
}