import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.api + '/api/order/');
  }
}
