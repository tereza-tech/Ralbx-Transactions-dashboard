import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { DatasetsComponent } from './datasets.component';
//import { CustomCalendarComponent } from './date-picker-with-value-accesor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forChild({
            types: [
                {
                    name: 'datasets',
                    component: DatasetsComponent,
                    wrappers: ['form-field'],
                },
            ],
        }),
    ],
    exports: [DatasetsComponent],
    declarations: [DatasetsComponent],
})
export class DatasetsModule { }