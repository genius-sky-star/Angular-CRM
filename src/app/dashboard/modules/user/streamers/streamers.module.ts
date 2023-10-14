import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamersRoutingModule } from './streamers-routing.module';
import { StreamersComponent } from './streamers.component';
import { TotalStreamersComponent } from './total-streamers/total-streamers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StreamerDetailComponent } from './total-streamers/streamer-detail/streamer-detail.component';

@NgModule({
  declarations: [StreamersComponent, TotalStreamersComponent, StreamerDetailComponent],
  imports: [SharedModule, CommonModule, StreamersRoutingModule],
})
export class StreamersModule {}
