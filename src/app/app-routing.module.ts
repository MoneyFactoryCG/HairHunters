import { AbTestComponent } from './ab-test/ab-test.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';
import { CookiesPageComponent } from './cookies-page/cookies-page.component';
import { AgreementPageComponent } from './agreement-page/agreement-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'stock', component: AbTestComponent},
  {path: 'agreement', component: AgreementPageComponent},
  {path: 'cookies', component: CookiesPageComponent},
  {path: 'thanks', component: ThanksPageComponent},
  {path: '**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
