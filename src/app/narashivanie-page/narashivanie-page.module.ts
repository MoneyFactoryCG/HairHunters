import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NarashivaniePageRoutingModule } from './narashivanie-page-routing.module';

import { NarashivaniePageComponent } from './narashivanie-page.component';
import { HeaderComponent } from './header/header.component';
import { WorksPageComponent } from './works-page/works-page.component';
import { MastersPageComponent } from './masters-page/masters-page.component';
import { ProfitOnePageComponent } from './profit-one-page/profit-one-page.component';
import { OurHairsPageComponent } from './our-hairs-page/our-hairs-page.component';
import { ProfitTwoPageComponent } from './profit-two-page/profit-two-page.component';
import { HairPalettePageComponent } from './hair-palette-page/hair-palette-page.component';
import { HairPaletteCarouselComponent } from './hair-palette-page/hair-palette-carousel/hair-palette-carousel.component';
import { PricePageComponent } from './price-page/price-page.component';
import { StockCarouselComponent } from './price-page/stock-carousel/stock-carousel.component';
import { HowWorkPageComponent } from './how-work-page/how-work-page.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { ReviewsCarouselComponent } from './reviews-page/reviews-carousel/reviews-carousel.component';
import { WorksCarouselComponent } from './works-page/works-carousel/works-carousel.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { FooterComponent } from './footer/footer.component';
import { StockCardComponent } from './price-page/stock-card/stock-card.component';
import { ButtonModalWindowComponent } from './button-modal-window/button-modal-window.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ModalWindowFormComponent } from './modal-window/modal-window-form/modal-window-form.component';
import { MastersCarouselComponent } from './masters-page/masters-carousel/masters-carousel.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CookieService } from 'ngx-cookie-service';
import { NgxMaskModule } from 'ngx-mask';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { MainPageComponent } from './main-page/main-page.component';
import { AbStockPageComponent } from './ab-stock-page/ab-stock-page.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    HeaderComponent,
    WorksPageComponent,
    MastersPageComponent,
    ProfitOnePageComponent,
    OurHairsPageComponent,
    ProfitTwoPageComponent,
    HairPalettePageComponent,
    HairPaletteCarouselComponent,
    PricePageComponent,
    StockCarouselComponent,
    HowWorkPageComponent,
    ReviewsPageComponent,
    ReviewsCarouselComponent,
    WorksCarouselComponent,
    ContactsPageComponent,
    FooterComponent,
    StockCardComponent,
    ButtonModalWindowComponent,
    ModalWindowComponent,
    ModalWindowFormComponent,
    MastersCarouselComponent,
    NarashivaniePageComponent,
    ThanksPageComponent,
    MainPageComponent,
    AbStockPageComponent,
  ],
  imports: [
    CommonModule,
    NarashivaniePageRoutingModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InViewportModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    CookieService,
  ],
  bootstrap: [NarashivaniePageComponent],
})
export class NarashivaniePageModule {}
