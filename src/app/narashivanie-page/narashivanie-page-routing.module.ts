import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NarashivaniePageComponent } from './narashivanie-page.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { MainPageComponent } from './main-page/main-page.component';

import { AbStockPageComponent } from './ab-stock-page/ab-stock-page.component';

const routes: Routes = [
  {
    path: '',
    component: NarashivaniePageComponent,
    children: [
      { path: '', component: MainPageComponent },
      { path: 'thanks', component: ThanksPageComponent },
      { path: 'stock', component: AbStockPageComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '/narashivanie',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NarashivaniePageRoutingModule {}
