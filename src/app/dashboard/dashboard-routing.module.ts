import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { DashboardComponent } from './dashboard.component';
import { AdminModule } from './modules/admin/admin.module';
import { RolesModule } from './modules/admin/roles/roles.module';
import { ArchivesModule } from './modules/archives/archives.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { SupportModule } from './modules/support/support.module';
import { SiteSettingsModule } from './modules/site-settings/site-settings.module';
import { AffiliatesModule } from './modules/affiliates/affiliates.module';
import { VerificationsModule } from './modules/verifications/verifications.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => HomeModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./modules/admin/admin.module').then((m) => AdminModule),
      },
      {
        path: 'verifications',
        loadChildren: () =>
          import('./modules/verifications/verifications.module').then(
            (m) => VerificationsModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then((u) => u.UserModule),
      },
      {
        path: 'archives',
        loadChildren: () =>
          import('./modules/archives/archives.module').then(
            (m) => ArchivesModule
          ),
      },
      {
        path: 'payments',
        loadChildren: () =>
          import('./modules/payments/payments.module').then(
            (m) => PaymentsModule
          ),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./modules/support/support.module').then((m) => SupportModule),
      },
      {
        path: 'site-settings',
        loadChildren: () =>
          import('./modules/site-settings/site-settings.module').then(
            (m) => SiteSettingsModule
          ),
      },
      {
        path: 'affiliates',
        loadChildren: () =>
          import('./modules/affiliates/affiliates.module').then(
            (m) => AffiliatesModule
          ),
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('./modules/admin/roles/roles.module').then((m) => RolesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
