import { ModalWindowFormService } from './modal-window-form.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router";

import * as $ from 'jquery';
import { environment } from 'src/environments/environment';
declare const fbq: any;

@Component({
  selector: 'app-modal-window-form',
  templateUrl: './modal-window-form.component.html',
  styleUrls: ['./modal-window-form.component.scss']
})
export class ModalWindowFormComponent implements OnInit {
  @Input() title: string;
  @Input() stock: string;
  @Input() message: string;
  @Input() windowId: string;

  @Input() link: string;

  value = {
    name: '',
    number: ''
  };

  form: FormGroup;
  isAgree = true;

  phoneRegex = /^\d{1}\d{1}-\d{3}-\d{2}-\d{2}$/;

  constructor(
    private cookieService: CookieService,
    private modalWindowFormService: ModalWindowFormService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required])
    });
    this.restoreValue();
  }

  restoreValue() {
    const value = this.cookieService.get('USER').split(' ');
    this.value.name = value[0];
    this.value.number = value[1];
  }

  onChange() {
    this.cookieService.set(
      'USER',
      this.value.name + ' ' + this.value.number,
      180
    );
  }

  openWindow(isSuccess: boolean) {
    setTimeout(() => {
      $('body').css({
        overflow: 'hidden'
      });
      $('.submit-container').css({
        transform: 'translateY(0)',
        opacity: '1'
      });
      if (isSuccess) {
        $('.submit-container .success').css({
          display: 'flex'
        });
      } else {
        $('.submit-container .failed').css({
          display: 'flex'
        });
      }
    }, 50);
    $('.submit-modal')
      .fadeIn(300)
      .css({ display: 'flex' });
  }

  closeWindow() {
    setTimeout(() => {
      $('.' + this.windowId + ' .modal-window').css({
        transform: 'translateY(100%)'
      });
    }, 600);
    $('.' + this.windowId + ' .modal-window').css({
      opacity: '0'
    });
    $('.' + this.windowId).fadeOut(300);
    $('html').css({
      overflow: 'auto'
    });
  }

  onSubmit(e) {
    console.log(environment.api);
    if (this.link) {
      // let file = new Blob()
      // fileSaver.saveAs(
      //   this.link,
      //   'сертификат.jpg'
      // );
      const a = document.createElement('a');
      a.href = this.link;
      a.target = '_blank';
      a.download = 'сертификат.jpg';
      document.body.appendChild(a);
      setTimeout(() => {
        a.click();
        document.body.removeChild(a);
      }, 500);
    }
    this.modalWindowFormService
      .sendMessage(
        this.message,
        this.form.get('name').value,
        this.form.get('number').value
      )
      .subscribe(
        res => {
          // setTimeout(() => {
          //   this.openWindow(true);
          // }, 0);
          this.closeWindow();
          fbq('track', 'Contact');
          this.router.navigate(['thanks']);
        },
        error => {
          setTimeout(() => {
            this.openWindow(false);
          }, 0);
          this.closeWindow();
          console.log(fbq);
          fbq('track', 'Contact');
        }
      );
  }
}
