import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./header/header.component";
import { WorksPageComponent } from "./works-page/works-page.component";
import { MastersPageComponent } from "./masters-page/masters-page.component";
import { ProfitOnePageComponent } from "./profit-one-page/profit-one-page.component";
import { OurHairsPageComponent } from "./our-hairs-page/our-hairs-page.component";
import { ProfitTwoPageComponent } from "./profit-two-page/profit-two-page.component";
import { HairPalettePageComponent } from "./hair-palette-page/hair-palette-page.component";
import { HairPaletteCarouselComponent } from "./hair-palette-page/hair-palette-carousel/hair-palette-carousel.component";

import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import { PricePageComponent } from './price-page/price-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksPageComponent,
    MastersPageComponent,
    ProfitOnePageComponent,
    OurHairsPageComponent,
    ProfitTwoPageComponent,
    HairPalettePageComponent,
    HairPaletteCarouselComponent,
    PricePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, Angular2UsefulSwiperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
