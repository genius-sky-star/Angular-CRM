import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivesComponent } from './archives.component';
import { LiveThumbnailArchiveComponent } from './live-thumbnail-archive/live-thumbnail-archive.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { ChatsArchivesComponent } from './chats-archives/chats-archives.component';

const routes: Routes = [
  {
    path: '',
    component: ArchivesComponent,
    children: [
      {
        path: '',
        redirectTo: 'liveThumbnails',
        pathMatch: 'full',
      },
      {
        path: 'liveThumbnails',
        component : LiveThumbnailArchiveComponent
      },
      {
        path: 'recordings',
        component : RecordingsComponent
      },     
       {
        path: 'chats',
        component : ChatsArchivesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivesRoutingModule {}
