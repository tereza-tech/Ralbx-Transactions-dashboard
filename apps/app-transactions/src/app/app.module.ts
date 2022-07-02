import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@ralbx/ui';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
