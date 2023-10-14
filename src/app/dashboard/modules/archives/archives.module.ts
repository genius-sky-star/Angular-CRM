import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivesRoutingModule } from './archives-routing.module';
import { ArchivesComponent } from './archives.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LiveThumbnailArchiveComponent } from './live-thumbnail-archive/live-thumbnail-archive.component';
import { RecordingsComponent } from './recordings/recordings.component';
import { ChatsArchivesComponent } from './chats-archives/chats-archives.component';

@NgModule({
  declarations: [ArchivesComponent, LiveThumbnailArchiveComponent, RecordingsComponent, ChatsArchivesComponent],
  imports: [CommonModule,
    ArchivesRoutingModule,
    SharedModule]
})
export class ArchivesModule {}
