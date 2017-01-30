import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { GeneralButtonComponent } from './general-button/general-button.component';
import { EmployeeButtonsComponent } from './employee-buttons/employee-buttons.component';
import { CallbackComponent } from './callback/callback.component';
import { RedirectComponent } from './redirect/redirect.component';

const appRoutes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '',
    component: RedirectComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GeneralButtonComponent,
    EmployeeButtonsComponent,
    CallbackComponent,
    RedirectComponent
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
