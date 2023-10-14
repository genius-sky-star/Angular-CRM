import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationsComponent } from './verifications.component';
import { StreamerAvatarComponent } from './streamer-avatar/streamer-avatar.component';
import { ProfileBannersComponent } from './profile-banners/profile-banners.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';

const routes: Routes = [
  {
    path: '',
    component: VerificationsComponent,
  },
  {
    path: 'streamer-avatar',
    component: StreamerAvatarComponent,
  },
  {
    path: 'profile-banners',
    component: ProfileBannersComponent,
  },
  {
    path: 'payment-settings',
    component: PaymentSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationsRoutingModule {}
