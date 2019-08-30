import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';

import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  validateForm: FormGroup;
  aSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private i18n: NzI18nService
  ) {
    this.i18n.setLocale(en_US);
    
  }

  ngOnInit() {
    const element = document.createElement('script');
    element.src = 'admin-style.js';
    document.body.appendChild(element);
    $('.cookies-modal').css({
      display: 'none'
    })
    this.validateForm = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.aSub = this.auth.login(this.validateForm.value).subscribe(
      () => this.router.navigate(['/admin/overview']),
      error => {
        console.log(error);
      }
    );
  }
}
