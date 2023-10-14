import { Component, OnInit } from '@angular/core';
import { VerifyTableColumn } from 'src/app/shared/interfaces/verifyTableColumn';

export interface VerifyStatusData {
  avatar: string;
  status: 'Pending' | 'Rejected' | 'Approved';
  view: string;
  approveAll: string;
  rejectAll: string;
}

const DATA: VerifyStatusData[] = [
  {
    avatar: 'verifyavatar.png',
    status: 'Pending',
    view: 'View',
    approveAll: 'Approve',
    rejectAll: 'Reject',
  },
  {
    avatar: 'verifyavatar.png',
    status: 'Rejected',
    view: 'View',
    approveAll: 'Approve',
    rejectAll: 'Reject',
  },
  {
    avatar: 'verifyavatar.png',
    status: 'Approved',
    view: 'View',
    approveAll: 'Approve',
    rejectAll: 'Reject',
  },
  {
    avatar: 'verifyavatar.png',
    status: 'Pending',
    view: 'View',
    approveAll: 'Approve',
    rejectAll: 'Reject',
  },
];

@Component({
  selector: 'app-streamer-avatar',
  templateUrl: './streamer-avatar.component.html',
  styleUrls: ['./streamer-avatar.component.scss'],
})
export class StreamerAvatarComponent implements OnInit {
  tableColumns: Array<VerifyTableColumn> = [
    {
      columnDef: 'avatar',
      header: 'Avatar List',
      isImage: true,
    },
    {
      columnDef: 'status',
      header: 'Status',
    },
    {
      columnDef: 'view',
      header: 'View',
      isView: true,
    },
    {
      columnDef: 'approveAll',
      header: 'Approve All',
      isApprove: true,
    },
    {
      columnDef: 'rejectAll',
      header: 'Reject All',
      isReject: true,
    },
  ];
  data: VerifyStatusData[];

  constructor() {}

  ngOnInit(): void {
    this.data = DATA;
  }
}
