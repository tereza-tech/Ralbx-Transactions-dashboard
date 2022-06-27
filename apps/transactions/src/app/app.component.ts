import { Component } from '@angular/core';
import { MemberDataService } from '@ralbx/table-data'

@Component({
  selector: 'ralbx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'transactions';
  constructor(public membersService: MemberDataService) { }
}
