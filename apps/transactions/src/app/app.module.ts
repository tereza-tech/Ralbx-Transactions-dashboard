import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TableSearchModule } from '@ralbx/table-search';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@ralbx/ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    TableSearchModule,
    UiModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
