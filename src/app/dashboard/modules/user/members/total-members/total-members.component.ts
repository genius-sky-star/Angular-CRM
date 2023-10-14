import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableColumn } from 'src/app/shared/interfaces/tableColumn';
import { DataService } from 'src/app/shared/services/data/data.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';

export interface Member {
  Image: string;
  Rank: string;
  Username: string;
  Tokens: number;
  Email: string;
  Created: string;
}

const TOTAL_MEMBERS_DATA: Member[] = [
  {
    Image: 'member_avatar.svg',
    Username: 'Alicia Stevens',
    Rank: '1st',
    Tokens: 10986,
    Email: 'aliciasteve@exam.com',
    Created: '11 Aug 2023',
  },
  {
    Image: 'active-streams.svg',
    Username: 'Thomas mike',
    Rank: '1st',
    Tokens: 10986,
    Email: 'thomasmike@exam.com',
    Created: '13 Aug 2023',
  },
  {
    Image: 'user-avatar1.png',
    Username: 'User avatar',
    Rank: '1st',
    Tokens: 10986,
    Email: 'avatar1@exam.com',
    Created: '25 July 2023',
  },
  {
    Image: 'user-avatar2.png',
    Username: 'User Avatar 2 ',
    Rank: '1st',
    Tokens: 10986,
    Email: 'avatar2@exam.com',
    Created: '23 July 2023',
  },
  {
    Image: 'user-avatar3.png',
    Username: 'User avatar3',
    Rank: '1st',
    Tokens: 10986,
    Email: 'avatar3@exam.com',
    Created: '15 June 2023',
  },
];

@Component({
  selector: 'app-total-members',
  templateUrl: './total-members.component.html',
  styleUrls: ['./total-members.component.scss'],
})
export class TotalMembersComponent implements OnInit {
  sidenavOpened: boolean = false;

  readonly selected: string = 'month';
  token: any;

  readonly totalMembersCountData = [
    {
      title: 'Total Members',
      count: '43.5',
      direction: 'up' as any,
      route: '/dashboard/user/members/total-members',
    },
    {
      title: 'Current Online Members',
      count: '43.5',
      direction: 'down',
    },
    {
      title: 'New Members',
      count: '43.5',
      direction: 'down',
    },
  ];

  tableColumns: Array<TableColumn> = [
    {
      columnDef: 'Username',
      header: 'User Name',
      image: 'member_avatar.svg',
      isImage: true,
    },
    {
      columnDef: 'Rank',
      header: 'Rank',
    },
    {
      columnDef: 'Tokens',
      header: 'Tokens',
      image: 'active-streams.png',
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

  columns = [
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'date', header: 'Date' },
    { columnDef: 'company', header: 'Company' },
    { columnDef: 'country', header: 'Country' },
    { columnDef: 'city', header: 'City' },
    { columnDef: 'phone', header: 'Phone' },
  ];

  data: any[];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private dataservice: DataService,
    private modalService: ModalService
  ) { }
  ngOnInit(): void {
    this.data = TOTAL_MEMBERS_DATA;
  }

  sidenavOpenedChange(val) {
    this.sidenavOpened = val;
  }

  navigateToMemberProfile(event) {
    this.dataservice.changeMessage(event);
    this.router.navigate(['dashboard/user/members/' + event?.Username]);
  }

  onTableAction(event) {
    if (event.name === 'Add Tokens') {
      this.sidenavOpened = true;
      this.token = event.value;
    }

    if (event.name === 'Ban') {
      this.modalService.createActionDialog({
        alertMessage: 'By clicking on Ban, User will lose access to their account temporarily',
        image: event.value.Image,
        username: event.value.Username,
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

    if (event.name === 'delete') {
      this.modalService.createActionDialog({
        alertMessage: 'By clicking on Delete, User will lose access to their account',
        image: event.value.Image,
        username: event.value.Username,
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

    if (event.name === 'suspend') {
      this.modalService.createActionDialog({
        alertMessage: 'By clicking on suspend, User will temporary lose access to his account',
        image: event.value.Image,
        username: event.value.Username,
        confirmationMessage: 'Are you sure you want to suspend this user profile?',
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
            text: 'Suspend',
            handler: () => {
              return true;
            }
          }
        ]
      });
    }
  }
}
