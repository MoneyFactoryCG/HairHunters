import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, ru_RU } from 'ng-zorro-antd';

import { LoginComponent } from './login/login.component';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

const routes: Routes = [
  { path: '', component: LoginComponent }
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU }
  ]
})
export class AdminPanelModule { }
