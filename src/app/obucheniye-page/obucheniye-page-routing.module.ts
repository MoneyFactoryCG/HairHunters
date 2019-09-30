import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObucheniyePageComponent } from './obucheniye-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { AbNoPricePageComponent } from './ab-no-price-page/ab-no-price-page.component';

const routes: Routes = [
  {
    path: '',
    component: ObucheniyePageComponent,
    children: [
      { path: '', component: MainPageComponent },
      { path: '2', component: AbNoPricePageComponent },
      { path: 'thanks', component: ThanksPageComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '/obucheniye',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObucheniyePageRoutingModule {}
