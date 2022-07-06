import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'ralbx-datasets',
  template: `
    <ng-container *ngIf="to && !to['readonly']; else readonly">
      <!--ralba-custom-calendar
        [showTime]="to['showTime']"
        [inline]="to['inline']"
        [touchUI]="to['touchUI']"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [class.inline-overlay-calendar]="to['inlineOverlayCalendar']"
        [dateFormat]="to['dateFormat']"
        [placeholder]="to['placeholder'] || ''"
        [attr.data-cy]="key"
        [returnFormat]="to['returnFormat']"
      ></ralba-custom-calendar-->
    </ng-container>
    <ng-template #readonly>
      <input
        pInputText
        type="text"
        [value]="formControl.value"
        [attr.data-cy]="key"
        disabled
        style="width: 100%;"
      />
    </ng-template>
    <!-- [attr.minDate]="to['attributes']?.min"
      [attr.maxDate]="to['attributes']?.max" -->
    <!-- [locale]="to['attributes'].locale" -->
    <!-- [placeholder]="placeholder" -->
  `,
  styleUrls: ['./datasets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatasetsComponent extends FieldType {
  override defaultOptions = {
    templateOptions: {
      options: [],
      showTime: false,
      inline: false,
      touchUI: false,
      dateFormat: 'mm/dd/yy',
      returnFormat: 'complete', // | 'date' | 'time' | 'complete' for date only
      placeholder: '',
      inlineOverlayCalendar: false,
      attributes: {
        // min: '',
        // max: '', // TODO: // implement max and min
        //format: null, //'dd. MM. yyyy'
        //locale: this.locale,
      },
    },
  };
}
