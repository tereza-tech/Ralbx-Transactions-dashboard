import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from './models/Transaction';

@Injectable({ providedIn: 'root' })
export class TableDataService {

    load(): Observable<Transaction[]> {

        return of([
            { id: 1, name: 'Oběd', from: 'Michal', to: 'Jakub', amount: 180.60, date: new Date().toISOString(), note: '' },
            { id: 2, name: 'Svačina', from: 'Jakub', to: 'Honza', amount: 62.15, date: new Date().toISOString(), note: 'Sušenka' },
        ]);
    }
}