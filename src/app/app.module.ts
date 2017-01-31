import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { GeneralButtonComponent } from './general-button/general-button.component';
import { EmployeeButtonsComponent } from './employee-buttons/employee-buttons.component';
import { CallbackComponent } from './callback/callback.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CallbackComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GeneralButtonComponent,
    EmployeeButtonsComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
