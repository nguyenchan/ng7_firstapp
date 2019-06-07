import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { AUTHORS } from './mock-data';
import { Observable, of } from 'rxjs';

import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAuthors(): Observable<Author[]> {
    return of(AUTHORS)
  }
}
