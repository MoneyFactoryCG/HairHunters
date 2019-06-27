import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorksPageComponent } from './works-page/works-page.component';
import { CarouselComponent } from './works-page/carousel/carousel.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MastersPageComponent } from './masters-page/masters-page.component';
import { ProfitOnePageComponent } from './profit-one-page/profit-one-page.component';
import { OurHairsPageComponent } from './our-hairs-page/our-hairs-page.component';
import { ProfitTwoPageComponent } from './profit-two-page/profit-two-page.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksPageComponent,
    CarouselComponent,
    MastersPageComponent,
    ProfitOnePageComponent,
    OurHairsPageComponent,
    ProfitTwoPageComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
