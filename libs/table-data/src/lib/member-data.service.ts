import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamMember } from '@ralbx/table-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberDataService {

  teamMembers$: Observable<TeamMember[]>;
  constructor(private http: HttpClient) {
    this.teamMembers$ = this.http.get<TeamMember[]>(
      'https://localhost:3000/team'
    );
  }
}