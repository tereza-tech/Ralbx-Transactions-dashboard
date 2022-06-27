import { Component, Input } from '@angular/core';
import { TeamMember } from '@ralbx/table-data';

@Component({
  selector: 'ralbx-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.scss'],
})
export class TeamCardsComponent {
  @Input() teammembers: TeamMember[] | null = [];



  trackById(teammember: TeamMember | null) {
    return teammember?.id ?? 0
  }
}

