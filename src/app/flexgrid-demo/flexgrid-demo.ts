// src/app/app.component.ts
import { Component, enableProdMode, NgModule, ViewChild, ViewEncapsulation } from '@angular/core';

// import Wijmo components
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcXlsx from '@grapecity/wijmo.xlsx';
import * as wjcGridXlsx from '@grapecity/wijmo.grid.xlsx';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { recentSales } from "../../data/data"

@Component({
  selector: 'app-root',
  templateUrl: 'flexgrid-demo.html',
  styleUrls: ['flexgrid-demo.css'], 
  encapsulation: ViewEncapsulation.None
})
export class FlexGridDemo {
  sales: any[];
  selectedItem: string;
  
  // references FlexGrid named 'flex' in the view
  @ViewChild('flex') flex: wjcGrid.FlexGrid;

  // DataSvc will be passed by derived classes
  constructor() {
      this.sales = recentSales;
  }

  initializeFlexGrid(flexgrid: wjcGrid.FlexGrid) {
      // sort the data by country
      let sd = new wjcCore.SortDescription('Country', true);
      flexgrid.collectionView.sortDescriptions.push(sd);
      flexgrid.collectionView.currentChanged.addHandler(this._updateCurrentInfo.bind(this));
      this._updateCurrentInfo();
  }

  
  save() {
    wjcGridXlsx.FlexGridXlsxConverter.saveAsync(this.flex,
        {
          includeColumnHeaders: true,
          includeCellStyles: false,
          formatItem: null
        },
        'FlexGrid.xlsx');
  }

  load() {
      let fileInput = <HTMLInputElement>document.getElementById('importFile');
      if (fileInput.files[0]) {
          wjcGridXlsx.FlexGridXlsxConverter.loadAsync(this.flex, fileInput.files[0], { includeColumnHeaders: true });
      }
  }

  private _updateCurrentInfo() {
      this.selectedItem = wjcCore.format(
          'Country: <b>{country}</b>, Sales: <b>{sales:c0}</b> Expenses: <b>{expenses:c0}</b>',
          this.flex.collectionView.currentItem);
  }
}