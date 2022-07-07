import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { TableComponent } from './table/table.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductService } from './productservice';
import { LetModule, PushModule } from '@ngrx/component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TableModule,
        ButtonModule,
        HttpClientModule,
        FormsModule,
        LetModule,
        PushModule
    ],
    declarations: [],
    bootstrap: [FiltersComponent],
    providers: [ProductService]
})

export class TabularModule { }