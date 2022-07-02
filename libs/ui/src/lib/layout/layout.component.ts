import { Component } from "@angular/core";
import { MemberDataService } from '@ralbx/table-data';

@Component({
  selector: 'ralbx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(public membersService: MemberDataService) { }

}

