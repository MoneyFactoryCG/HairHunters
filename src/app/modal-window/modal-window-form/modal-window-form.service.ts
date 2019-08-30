import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowFormService {
  constructor(private http: HttpClient) {}

  sendMessage(title: string, name: string, phoneNumber: string) {
    return this.http.post(
      environment.api + '/api/telegramNotifications/sendMessage',
      {
        title,
        name,
        phoneNumber: '+380' + phoneNumber
      }
    );
  }

  createOrder(title: string, name: string, phoneNumber: string) {
    return this.http.post(environment.api + '/api/order/', {
      status: 'new',
      list: {
        name,
        phone: '+380' + phoneNumber,
        type: [' '],
        price: 0,
        prepay: {
          sum: 0,
          method: ' '
        },
        note: title
      }
    });
  }
}
