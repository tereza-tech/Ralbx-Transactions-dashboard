import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TeamCardsComponent } from './team-cards/team-cards.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { UsersetsComponent } from './usersets/usersets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableSearchModule } from '@ralbx/table-search';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, TableSearchModule, FontAwesomeModule],
  declarations: [
    TeamCardsComponent,
    SidebarComponent,
    NavbarComponent,
    LayoutComponent,
    DashboardComponent,
    CardComponent,
    TableComponent,
    UsersetsComponent
  ],
  exports: [TeamCardsComponent, SidebarComponent, NavbarComponent, LayoutComponent, DashboardComponent, CardComponent, TableComponent]
})
export class UiModule { }
