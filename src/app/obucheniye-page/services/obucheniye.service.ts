import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ObucheniyeService {
  constructor(private http: HttpClient) {}

  getDate() {
    return this.http.get(environment.api + '/api/obucheniye/getDate');
  }

  setDate(courses_date) {
    return this.http.post(
      environment.api + '/api/obucheniye/getDate',
      {
        courses_date,
      },
    );
  }
}
