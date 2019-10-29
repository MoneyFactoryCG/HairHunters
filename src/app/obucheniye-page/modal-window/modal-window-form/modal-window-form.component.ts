import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ModalWindowFormService } from './modal-window-form.service';

declare const fbq: any;

@Component({
  selector: 'app-modal-window-form',
  templateUrl: './modal-window-form.component.html',
  styleUrls: ['./modal-window-form.component.scss'],
})
export class ModalWindowFormComponent implements OnInit {
  @Input() info: {
    title;
    type;
    button;
    message;
  };
  @Input() windowId: string;

  isMobileDevice;

  value = {
    name: '',
    phone: '',
  };

  form: FormGroup;
  isAgree = true;
  isSubmit = true;

  phoneRegex = /^\d{1}\d{1}-\d{3}-\d{2}-\d{2}$/;

  constructor(
    private cookieService: CookieService,
    private modalWindowFormService: ModalWindowFormService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
    });
    this.restoreValue();
    const deviceWidth = 480;
    this.isMobileDevice =
      navigator.userAgent.match(/iPad|iPhone|iPod/i) != null ||
      screen.width <= deviceWidth;
  }

  restoreValue() {
    const value = this.cookieService.get('USER').split(' ');
    this.value.name = value[0];
    this.value.phone = value[1];
  }

  onChange() {
    this.value.name = this.form.get('name').value;
    this.value.phone = this.form.get('phone').value;
    this.cookieService.set(
      'USER',
      this.value.name + ' ' + this.value.phone,
      180,
    );
  }

  closeWindow() {
    const el = document.getElementById(this.windowId);
    el.className = 'container';
  }

  errorWindowOpen() {
    const el = document.getElementById(this.windowId);
    const errorWindow = document.getElementById(
      `${this.windowId}-error`,
    );
    errorWindow.className = 'error-modal is-active';
  }

  errorWindowClose() {
    const el = document.getElementById(this.windowId);
    el.className = 'container';
    const errorWindow = document.getElementById(
      `${this.windowId}-error`,
    );
    errorWindow.className = 'error-modal';
  }

  onSubmit(e) {
    this.isSubmit = false;
    this.modalWindowFormService
      .sendMessageObucheniye(
        this.info.message,
        this.form.get('name').value,
        this.form.get('phone').value,
      )
      .subscribe(
        res => {
          this.closeWindow();
          fbq('track', 'Lead');
          window.location.href = '/obucheniye/thanks';
          this.isSubmit = true;
        },
        error => {
          this.isSubmit = true;
          setTimeout(() => {
            this.errorWindowOpen();
          }, 0);
          fbq('track', 'Lead');
        },
      );
    this.modalWindowFormService
      .createOrder(
        this.info.message,
        this.form.get('name').value,
        this.form.get('phone').value,
      )
      .subscribe(
        res => {
          this.isSubmit = true;
          console.log(res);
        },
        error => {
          this.isSubmit = true;
          console.log(error);
        },
      );
  }
}
