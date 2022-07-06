import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/compat/firestore/angular-fire-compat-firestore';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';


export interface Users {
  id: string;
  name: string;
  email: string;
  personalInfo: string;
}

@Component({
  selector: 'ralbx-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {


  // Columns to show in table
  displayedColumns: string[] = ['name', 'email', 'personalInfo', 'editObj'];

  // For referencing a local dataset
  //dataSource = new MatTableDataSource<Users>(this.dataSourceInfo);

  // Fot referencing a Firebase dataset
  dataSource: any;
  id: any;
  name: any;
  email: any;
  personalInfo: any;
  editObj: any;
  actions: any;

  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  title = "Add a User";
  add: any;
  edit: any;

  constructor(
    private store: AngularFirestore,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit() {
    this.getAll();
  }

  openDialog(arg: string | undefined) {
    if (arg === 'add') {
      this.title = 'Add a User'
    }
    this.btnShow.nativeElement.click();
  }

  closeDialog() {
    this.clearEdit();
    this.btnClose.nativeElement.click();
  }

  goBack() {
    window.history.go(-1);
  }

  clearEdit() {
    this.editObj = null;
    this.name = "";
    this.personalInfo = "";
    this.email = "";
  }

  addUser() {

    if (this.editObj) {
      this.store.collection('list')
        .doc(this.editObj.id)
        .update({ name: this.name, personalInfo: this.personalInfo, email: this.email });
    } else {
      this.store.collection('list')
        .add({ name: this.name, personalInfo: this.personalInfo, email: this.email });
    }
    this.clearEdit();
    this.closeDialog();
  }

  editUser(id: string) {
    this.title = "Edit User"
    this.store.collection('list')
      .doc(id).get()
      .subscribe((response) => {
        this.editObj = Object.assign({ id: response.id }, response.data());
        this.name = this.editObj.name;
        this.personalInfo = this.editObj.personalInfo;
        this.email = this.editObj.email;
        this.openDialog(this.edit);
      })
    this.clearEdit();
  }

  delete(id: string) {
    const result = confirm('Are you sure you wish to delete?');
    if (result) {
      this.store.collection('list').doc(id).delete();
    }
  }

  getAll() {
    this.store.collection('list')
      .snapshotChanges()
      .subscribe((response) => {
        this.dataSource = new MatTableDataSource(response.map(item => {
          return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
        }))
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}