
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import {AuthGuard} from './shared/classes/auth.guard'
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [LoginComponent, OverviewComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class AdminPanelModule { }
