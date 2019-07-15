import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-modal-window-form",
  templateUrl: "./modal-window-form.component.html",
  styleUrls: ["./modal-window-form.component.scss"]
})
export class ModalWindowFormComponent implements OnInit {
  @Input() title: string;
  @Input() stock: string;

  value = {
    name: "",
    number: ""
  };
  form: FormGroup;
  isAgree: boolean = true;

  phoneRegex = /^\d{1}\d{1}-\d{3}-\d{2}-\d{2}$/;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required])
    });
    this.restoreValue();
  }

  restoreValue() {
    const value = this.cookieService.get("USER").split(' ');
    this.value.name = value[0];
    this.value.number = value[1];
  }

  onChange() {
    this.cookieService.set(
      "USER",
      this.value.name + " " + this.value.number,
      180
    );
  }

  onSubmit() {}
}
