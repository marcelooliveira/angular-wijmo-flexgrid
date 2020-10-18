import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexGridDemo } from './flexgrid-demo/flexgrid-demo';
import { OpenSourceDemo } from './opensource-demo/opensource-demo';

// import Wijmo modules
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

// apply Wijmo license key
import { setLicenseKey } from '@grapecity/wijmo';
setLicenseKey('your license key goes here');

// import NgxDatatable modules
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent, 
    FlexGridDemo,
    OpenSourceDemo
  ],
  imports: [
    BrowserModule,
    WjGridModule,
    NgxDatatableModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  // bootstrap: [FlexGridDemo]
  bootstrap: [OpenSourceDemo]
})
export class AppModule { }
