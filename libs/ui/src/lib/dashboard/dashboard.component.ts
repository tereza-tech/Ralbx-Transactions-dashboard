import { Component } from "@angular/core";
import { faArrowUp, faChartColumn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ralbx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  faArrowUp = faArrowUp;
  faChartColumn = faChartColumn;
  constructor() { null; }

}

