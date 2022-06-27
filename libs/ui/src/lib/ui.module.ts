import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TeamCardsComponent } from './team-cards/team-cards.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TeamCardsComponent],
  exports: [TeamCardsComponent],
})
export class UiModule { }
