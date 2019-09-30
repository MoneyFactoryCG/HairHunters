import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ObucheniyePageRoutingModule } from './obucheniye-page-routing.module';

import { ObucheniyePageComponent } from './obucheniye-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { HamburgerMenuComponent } from './header/hamburger-menu/hamburger-menu.component';
import { ModalMenuComponent } from './header/modal-menu/modal-menu.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { StockTimerComponent } from './stock-timer/stock-timer.component';
import { ForWhomBlockComponent } from './for-whom-block/for-whom-block.component';
import { TeacherBlockComponent } from './teacher-block/teacher-block.component';
import { ModalButtonComponent } from './modal-button/modal-button.component';
import { CoursesBlockComponent } from './courses-block/courses-block.component';
import { WhatChooseBlockComponent } from './what-choose-block/what-choose-block.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TypeCoursesCarouselComponent } from './what-choose-block/type-courses-carousel/type-courses-carousel.component';
import { NgxMaskModule } from 'ngx-mask';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { BottomBlockComponent } from './bottom-block/bottom-block.component';
import { FooterComponent } from './footer/footer.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ModalWindowFormComponent } from './modal-window/modal-window-form/modal-window-form.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { AbNoPricePageComponent } from './ab-no-price-page/ab-no-price-page.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    ObucheniyePageComponent,
    HamburgerMenuComponent,
    ModalMenuComponent,
    MainBlockComponent,
    StockTimerComponent,
    ForWhomBlockComponent,
    TeacherBlockComponent,
    ModalButtonComponent,
    CoursesBlockComponent,
    WhatChooseBlockComponent,
    TypeCoursesCarouselComponent,
    BottomBlockComponent,
    FooterComponent,
    ModalWindowComponent,
    ModalWindowFormComponent,
    ThanksPageComponent,
    AbNoPricePageComponent,
  ],
  imports: [
    CommonModule,
    ObucheniyePageRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
    InViewportModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [ObucheniyePageComponent],
})
export class ObucheniyePageModule {}
