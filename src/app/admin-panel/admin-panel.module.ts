import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AdminPanelComponent } from './admin-panel.component';


registerLocaleData(en);


@NgModule({
  declarations: [AdminPanelComponent, LoginComponent, OverviewComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    AdminPanelRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class AdminPanelModule {}
