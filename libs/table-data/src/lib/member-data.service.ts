import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TeamMember } from '@ralbx/table-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberDataService {

  teamMembers$: Observable<TeamMember[]>;
  constructor(private http: HttpClient) {
    this.teamMembers$ = this.http.get<TeamMember[]>(
      'http://localhost:3000/team'
    );
  }
}