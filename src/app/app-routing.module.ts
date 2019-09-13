import { CookiesPageComponent } from './cookies-page/cookies-page.component';
import { AgreementPageComponent } from './agreement-page/agreement-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/narashivanie',
    pathMatch: 'full',
  },
  {
    path: 'narashivanie',
    loadChildren: () =>
      import('./narashivanie-page/narashivanie-page.module').then(
        mod => mod.NarashivaniePageModule,
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-panel/admin-panel.module').then(
        mod => mod.AdminPanelModule,
      ),
  },
  { path: 'agreement', component: AgreementPageComponent },
  { path: 'cookies', component: CookiesPageComponent },
  {
    path: '**',
    loadChildren: () =>
      import('./narashivanie-page/narashivanie-page.module').then(
        mod => mod.NarashivaniePageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
