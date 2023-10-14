import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamersComponent } from './streamers.component';
import { TotalStreamersComponent } from './total-streamers/total-streamers.component';
import { StreamerDetailComponent } from './total-streamers/streamer-detail/streamer-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StreamersComponent,
  },
  {
    path: 'total-streamers',
    component: TotalStreamersComponent,
  },
  {
    path: 'total-streamers/streamer-detail/:username',
    component: StreamerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamersRoutingModule {}
