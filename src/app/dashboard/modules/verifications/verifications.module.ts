import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationsRoutingModule } from './verifications-routing.module';
import { VerificationsComponent } from './verifications.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { StreamerAvatarComponent } from './streamer-avatar/streamer-avatar.component';
import { ProfileBannersComponent } from './profile-banners/profile-banners.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';

@NgModule({
  declarations: [VerificationsComponent, StreamerAvatarComponent, ProfileBannersComponent, PaymentSettingsComponent],
  imports: [
    CommonModule,
    VerificationsRoutingModule,
    RouterModule,
    SharedModule,
    HomeModule,
  ],
})
export class VerificationsModule {}
