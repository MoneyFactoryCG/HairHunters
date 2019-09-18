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

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    ObucheniyePageComponent,
    HamburgerMenuComponent,
    ModalMenuComponent,
    MainBlockComponent,
    StockTimerComponent,
  ],
  imports: [
    CommonModule,
    ObucheniyePageRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [ObucheniyePageComponent],
})
export class ObucheniyePageModule {}
