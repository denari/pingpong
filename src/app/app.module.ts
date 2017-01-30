import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeneralButtonComponent } from './general-button/general-button.component';
import { EmployeeButtonsComponent } from './employee-buttons/employee-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralButtonComponent,
    EmployeeButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
