import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArchiveActionsComponent } from 'src/app/shared/components/archive-actions/archive-actions.component';
import { VideoPlayerComponent } from 'src/app/shared/components/video-player/video-player.component';
import { Column } from 'src/app/shared/interfaces/column';
import { ModalService } from 'src/app/shared/services/modal/modal.service';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss']
})
export class RecordingsComponent implements OnInit {

  archiveColumns: Array<Column> = [
    {
      columnDef: 'image',
      header: 'Thumbnail',
      cell: (element: Record<string, any>) => `${element['image']}`,
      isThumbnailImage: true
    },
    {
      columnDef: 'title',
      header: 'Title',
      cell: (element: Record<string, any>) => `${element['title']}`,

    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Record<string, any>) => `${element['date']}`,
    },
    {
      columnDef: 'duration',
      header: 'Duration',
      cell: (element: Record<string, any>) => `${element['duration']}`
    }
  ];
  thumbnailTableData = [
    {
      "image": "admin_image.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "GTA Live stream",
      "date": "31 Aug, 2023",
      "duration": "02h:45m:20s"
    },
    {
      "image": "admin_image_2.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Call of duty Live stream",
      "date": "29 Aug, 2023",
      "duration": "10h:05m:35s"
    },
    {
      "image": "admin_image.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Ashphalt Live stream",
      "date": "23 Jul, 2023",
      "duration": "12h:23m:33s"
    },
    {
      "image": "admin_image_2.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Mafia Wars Live stream",
      "date": "09 Jul, 2023",
      "duration": "17h:55m:22s"
    },
    {
      "image": "admin_image.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "GTA Live stream",
      "date": "31 Aug, 2023",
      "duration": "02h:45m:20s"
    },
    {
      "image": "admin_image_2.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Call of duty Live stream",
      "date": "29 Aug, 2023",
      "duration": "10h:05m:35s"
    },
    {
      "image": "admin_image.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Ashphalt Live stream",
      "date": "23 Jul, 2023",
      "duration": "12h:23m:33s"
    },
    {
      "image": "admin_image_2.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Mafia Wars Live stream",
      "date": "09 Jul, 2023",
      "duration": "17h:55m:22s"
    },
    {
      "image": "admin_image.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "GTA Live stream",
      "date": "31 Aug, 2023",
      "duration": "02h:45m:20s"
    },
    {
      "image": "admin_image_2.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Call of duty Live stream",
      "date": "29 Aug, 2023",
      "duration": "10h:05m:35s"
    },
    {
      "image": "admin_image.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Ashphalt Live stream",
      "date": "23 Jul, 2023",
      "duration": "12h:23m:33s"
    },
    {
      "image": "admin_image_2.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Mafia Wars Live stream",
      "date": "09 Jul, 2023",
      "duration": "17h:55m:22s"
    },
    {
      "image": "admin_image.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "GTA Live stream",
      "date": "31 Aug, 2023",
      "duration": "02h:45m:20s"
    },
    {
      "image": "admin_image_2.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Call of duty Live stream",
      "date": "29 Aug, 2023",
      "duration": "10h:05m:35s"
    },
    {
      "image": "admin_image.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Ashphalt Live stream",
      "date": "23 Jul, 2023",
      "duration": "12h:23m:33s"
    },
    {
      "image": "admin_image_2.jpeg",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "title": "Mafia Wars Live stream",
      "date": "09 Jul, 2023",
      "duration": "17h:55m:22s"
    },
  ]
  constructor(private dialog: MatDialog,private modalService:ModalService
  ) {

  }
  ngOnInit(): void {
  }
  openVideoPlayer(data) {
    data.isVideo = true;
    const dialogRef = this.dialog.open(VideoPlayerComponent,
      {
        maxWidth: '100vw',
        maxHeight: '100vh',
        data: data,
        position: {
          top: '10vh'
        }
      });
    let dialogSubscription = dialogRef.afterClosed().subscribe(result => {
      dialogSubscription.unsubscribe();
      if (result) {
      }
    });
  }


  archiveAction(viewerData: any, action: any) {
    const data = {
      action: action,
      viewerData: viewerData
    }
    const dialogRef = this.dialog.open(ArchiveActionsComponent, {
      data
    });

    let dialogSubscription = dialogRef.afterClosed().subscribe(result => {
      dialogSubscription.unsubscribe();
      if (result) {
      }
    });
  }

  onTableAction(data) {
    if (data.name == 'View') {
      this.openVideoPlayer(data.value)
    } else {

      this.modalService.createActionDialog({
        alertMessage: 'By clicking on Delete, user recording will be deleted',
        image: data.value.image,
        title: data.value.title,
        userType: '',
        confirmationMessage: 'Are you sure you want to delete this recording?',
        buttons: [
          {
            type: 'stroked',
            text: 'Cancel',
            handler: () => {
              return true;
            }
          },
          {
            type: 'primary',
            text: 'Delete',
            handler: () => {
              return true;
            }
          }
        ],
      });

      // this.archiveAction(data.value, 'recording-delete')
    }
  }
}
