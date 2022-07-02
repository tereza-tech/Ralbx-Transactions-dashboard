import { Component, OnInit } from "@angular/core";
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'ralbx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  color = 'light';
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  ngOnInit(): void { null; }
}
