import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import Wijmo modules
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

// apply Wijmo license key
import { setLicenseKey } from '@grapecity/wijmo';
setLicenseKey('your license key goes here');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WjGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
