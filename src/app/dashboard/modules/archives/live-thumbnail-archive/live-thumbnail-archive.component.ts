import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ModalService } from 'src/app/shared/services/modal/modal.service';

@Component({
  selector: 'app-live-thumbnail-archive',
  templateUrl: './live-thumbnail-archive.component.html',
  styleUrls: ['./live-thumbnail-archive.component.scss']
})
export class LiveThumbnailArchiveComponent implements OnInit {
  length: number = 0;
  pagedList: any = [];
  pageSize: number = 6;
  displayedColumns: Array<string> = [] = ['userName', 'joinedTime'];

  viewersData = [
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' },
    { userName: 'Ashley Kent', joinedTime: '11:02:32' }
  ];
  allUser: any = [
    {
      "image": "admin_image.jpeg",
      "userType": "Admin",
      "source": "Floxy Nina - GRWM Cam Special 1",
      "title": "GRWM Cam Special",
      "date": " 03 Aug, 2023",
      "time": "11:32:34"
    },
    {
      "image": "admin_image_2.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special",
      "title": "Morning Hike Adventure",
      "date": "17 Sep, 2023",
      "time": "08:45:21"
    },
    {
      "image": "admin_image.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special 2",
      "title": "Game Night Extravaganza",
      "date": "21 Oct, 2023",
      "time": "19:00:00"
    },
    {
      "image": "admin_image_2.jpeg",
      "userType": "Admin",
      "source": "Floxy Nina - GRWM Cam Special 3",
      "title": "Sunday Brunch Fiesta",
      "date": "12 Nov, 2023",
      "time": "10:15:47"
    },
    {
      "image": "admin_image.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special",
      "title": "Art Workshop",
      "date": "29 Sep, 2023",
      "time": "14:30:00"
    },
    {
      "image": "admin_image_2.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special",
      "title": "Fitness Challenge",
      "date": "05 Oct, 2023",
      "time": "17:00:00"
    },
    {
      "image": "admin_image.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special 4",
      "title": "Cooking Class: Italian Cuisine",
      "date": "08 Dec, 2023",
      "time": "18:30:00"
    },
    {
      "image": "admin_image_2.jpeg",
      "userType": "Admin",
      "source": "Floxy Nina - GRWM Cam Special",
      "title": "Movie Marathon Night",
      "date": "14 Oct, 2023",
      "time": "20:00:00"
    },
    {
      "image": "admin_image.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special"
    },
    {
      "image": "admin_image_2.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special 5",
      "title": "Photography Workshop",
      "date": "02 Nov, 2023",
      "time": "12:45:00"
    },
    {
      "image": "admin_image.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special",
      "title": "Karaoke Party",
      "date": "19 Nov, 2023",
      "time": "21:15:30"
    },
    {
      "image": "admin_image_2.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special 6",

    },
    {
      "image": "admin_image.jpeg",
      "userType": "Admin",
      "source": "Floxy Nina - GRWM Cam Special 7",
      "title": "Gardening Club Meeting",
      "date": "25 Sep, 2023",
      "time": "09:00:00"
    },
    {
      "image": "admin_image_2.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special",
      "title": "Virtual Reality Game Tournament",
      "date": "10 Oct, 2023",
      "time": "16:30:00"
    },
    {
      "image": "admin_image.jpeg",
      "userType": "Streamer",
      "source": "Floxy Nina - GRWM Cam Special 8",
      "title": "Yoga and Meditation Retreat",
      "date": "01 Nov, 2023",
      "time": "07:00:00"
    },
    {
      "image": "admin_image_2.jpeg",
      "userType": "Admin",
      "source": "Floxy Nina - GRWM Cam Special 9",
      "title": "Board Game Night",
      "date": "18 Dec, 2023",
      "time": "19:45:00"
    },
  ]

  constructor(
    private dialog: MatDialog,
    private modalService: ModalService
  ) {
  }
  ngOnInit(): void {
    this.pagedList = this.allUser.slice(0, this.pageSize);
    this.length = this.allUser.length;
  }

  archiveAction(viewerData) {
    this.modalService.createActionDialog({
      alertMessage: 'By clicking on Delete, this file will be permanently deleted.',
      image: viewerData.image,
      userType: viewerData.userType,
      source: viewerData.source,
      confirmationMessage: 'Are you sure you want to Permanently delete this thumbnail?',
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
  }
  async archiveView(viewerData) {
    this.modalService.createActionDialog({
      isThumbnail: true,
      thumbnailContent: viewerData,
      displayedColumns: this.displayedColumns,
      viewersData: this.viewersData,
      buttons: [
        {
          text: 'delete',
          handler: () => {
            this.modalService.createActionDialog({
              alertMessage: 'By clicking on Delete, this file will be permanently deleted.',
              image: viewerData.image,
              userType: viewerData.userType,
              source: viewerData.source,
              confirmationMessage: 'Are you sure you want to Permanently delete this thumbnail?',
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
                    this.modalService.create({
                      iconPath:'success',
                      title: 'Success!',
                      isDeleteConfirmationModal:true,
                      message : viewerData.userType + " - " +viewerData.source + " has been Deleted",
                      buttons : [
                        {
                          text : 'CLOSE',
                          handler:() => {
                            return true;
                          }
                        }
                      ]

                    })
                    return true;
                  }
                }
              ],
            });
            return true;
          }
        },
        {
          text: 'Close',
          handler: () => {
            return true;
          }
        }
      ],
    });
  }
  getPaginatorData(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.allUser.slice(startIndex, endIndex);
  }
}
