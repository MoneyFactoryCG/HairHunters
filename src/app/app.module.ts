import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NarashivaniePageModule } from './narashivanie-page/narashivanie-page.module';
import { ObucheniyePageModule } from './obucheniye-page/obucheniye-page.module';

import { AppComponent } from './app.component';

import { AgreementPageComponent } from './agreement-page/agreement-page.component';
import { CookiesPageComponent } from './cookies-page/cookies-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AgreementPageComponent,
    CookiesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NarashivaniePageModule,
    ObucheniyePageModule,
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
