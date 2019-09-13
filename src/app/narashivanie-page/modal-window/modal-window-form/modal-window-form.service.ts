import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ModalWindowFormService {
  constructor(private http: HttpClient) {}

  sendMessage(title: string, name: string, phoneNumber: string) {
    return this.http.post(
      environment.api + '/api/telegramNotifications/sendMessage',
      {
        title,
        name,
        phoneNumber: '+380' + phoneNumber,
      },
    );
  }

  getClient(phone: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const params = new HttpParams();
    params.append('phone', phone);
    return this.http.get(environment.api + '/api/client/', {
      headers,
      params,
    });
  }

  addClient(name: string, phone: string) {
    return this.http.post(environment.api + '/api/client/', {
      name,
      phone,
    });
  }

  createOrder(title: string, name: string, phoneNumber: string) {
    return this.http.post(environment.api + '/api/order/', {
      status: 'new',
      list: {
        name,
        phone: '+380' + phoneNumber,
        type: [[' '], [' ']],
        price: 0,
        prepay: {
          sum: 0,
          method: ' ',
        },
        master: ' ',
        note: title,
      },
    });
  }
}
