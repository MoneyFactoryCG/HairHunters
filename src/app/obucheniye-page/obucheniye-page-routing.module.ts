import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObucheniyePageComponent } from './obucheniye-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: ObucheniyePageComponent,
    children: [{ path: '', component: MainPageComponent }],
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
