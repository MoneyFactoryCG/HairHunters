import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ModalWindowFormService {
  constructor(private http: HttpClient) {}

  sendMessage(title: string, name: string, phoneNumber: string) {
    console.log(title)
    return this.http.post(
      environment.api + "/api/telegramNotifications/sendMessage",
      {
        title: title,
        name: name,
        phoneNumber: "+380" + phoneNumber
      }
    );
  }
}
