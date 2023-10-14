import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from 'src/app/shared/interfaces/tableColumn';
import { Router } from '@angular/router';

import { SelectedStreamerService } from 'src/app/shared/services/user-data/selected-streamer.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';

export interface Streamer {
  Image: string;
  Rank: string;
  username: string;
  Tokens: number;
  Email: string;
  Created: string;
  StreamerLevel: string;
}

const TOTAL_STREAMERS_DATA: Streamer[] = [
  {
    Image: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    Rank: '1st',
    Tokens: 10986,
    Email: 'floxynian@exam.com',
    Created: '11 Aug 2023',
    StreamerLevel: '1',
  },
  {
    Image: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    Rank: '1st',
    Tokens: 10986,
    Email: 'floxynian@exam.com',
    Created: '11 Aug 2023',
    StreamerLevel: '1',
  },
  {
    Image: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    Rank: '1st',
    Tokens: 10986,
    Email: 'floxynian@exam.com',
    Created: '11 Aug 2023',
    StreamerLevel: '1',
  },
  {
    Image: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    Rank: '1st',
    Tokens: 10986,
    Email: 'floxynian@exam.com',
    Created: '11 Aug 2023',
    StreamerLevel: '1',
  },
  {
    Image: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    Rank: '1st',
    Tokens: 10986,
    Email: 'floxynian@exam.com',
    Created: '11 Aug 2023',
    StreamerLevel: '1',
  },
  {
    Image: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    Rank: '1st',
    Tokens: 10986,
    Email: 'floxynian@exam.com',
    Created: '11 Aug 2023',
    StreamerLevel: '1',
  },
  {
    Image: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    Rank: '1st',
    Tokens: 10986,
    Email: 'floxynian@exam.com',
    Created: '11 Aug 2023',
    StreamerLevel: '1',
  },
];

@Component({
  selector: 'app-total-streamers',
  templateUrl: './total-streamers.component.html',
  styleUrls: ['./total-streamers.component.scss'],
})
export class TotalStreamersComponent implements OnInit {
  sidenavOpened: boolean = false;

  readonly selected: string = 'month';
  streamerLevel: any;

  readonly totalStreamersCountData = [
    {
      title: 'Total Streamers',
      count: '43.5',
      direction: 'up' as any,
    },
    {
      title: 'Current Online Streamers',
      count: '43.5',
      direction: 'down',
    },
    {
      title: 'New Streamers',
      count: '43.5',
      direction: 'down',
    },
  ];

  TotalStreamersData = TOTAL_STREAMERS_DATA;

  tableColumns: Array<TableColumn> = [
    {
      columnDef: 'username',
      header: 'User Name',
      image: 'streamer_avatar.svg',
      isImage: true,
    },
    {
      columnDef: 'Rank',
      header: 'Rank',
    },
    {
      columnDef: 'Tokens',
      header: 'Tokens',
      image: 'streamer_avatar.svg',
      isNumberAndImage: true,
    },
    {
      columnDef: 'Email',
      header: 'Email',
    },
    {
      columnDef: 'Created',
      header: 'Created',
    },
  ];

  data: any[];

  userData: any[];

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public selectedStreamerService: SelectedStreamerService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.data = TOTAL_STREAMERS_DATA;
  }

  sidenavOpenedChange(val) {
    this.sidenavOpened = val;
  }

  navigateToStreamerProfile(event) {
    this.selectedStreamerService.setData(event.value);
    this.router.navigate([
      'dashboard/user/streamers/total-streamers/streamer-detail/' +
        event?.username,
    ]);
  }

  onTableAction(event) {
    if (event.name === 'Edit') {
      this.sidenavOpened = true;
      this.userData = event.value;
    }

    if (event.name === 'Login') {
    }

    if (event.name === 'Ban') {
      this.modalService.createActionDialog({
        alertMessage: 'By clicking on Ban, User will lose access to their account temporarily',
        image: event.value.Image,
        username: event.value.username,
        confirmationMessage: 'Are you sure you want to ban this user?',
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
            text: 'Ban',
            handler: () => {
              return true;
            }
          }
        ]
      });
    }

    if (event.name === 'Stopstream') {
      this.modalService.createActionDialog({
        alertMessage: 'By clicking on Stop, user stream will be terminated',
        image: event.value.Image,
        username: event.value.username,
        confirmationMessage: 'Are you sure you want to stop this user stream?',
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
            text: 'Stop',
            handler: () => {
              return true;
            }
          }
        ]
      });
    }

    if (event.name === 'delete') {
      this.modalService.createActionDialog({
        alertMessage: 'By clicking on Delete, User will lose access to their account',
        image: event.value.Image,
        username: event.value.username,
        confirmationMessage: 'Are you sure you want to delete this user profile?',
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
        ]
      });
    }
  }
}
