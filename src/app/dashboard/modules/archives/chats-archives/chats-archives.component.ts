import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  userData: any;
  date: string;
  message: string;
}
export interface ChatElement {
  time: string;
  name: string;
  message: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { userData: { name: 'Hydrogen', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Helium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Lithium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi there' },
  { userData: { name: 'Beryllium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Be' },
  { userData: { name: 'Boron', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Carbon', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Nitrogen', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi there' },
  { userData: { name: 'Oxygen', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Fluorine', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Neon', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi there' },
  { userData: { name: 'Sodium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Magnesium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Aluminum', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi There' },
  { userData: { name: 'Hydrogen', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Helium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Lithium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi there' },
  { userData: { name: 'Beryllium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Be' },
  { userData: { name: 'Boron', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Carbon', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Nitrogen', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi there' },
  { userData: { name: 'Oxygen', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Fluorine', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Neon', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi there' },
  { userData: { name: 'Sodium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Magnesium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Aluminum', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi There' },
  { userData: { name: 'Hydrogen', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Helium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Lithium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi there' },
  { userData: { name: 'Beryllium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Be' },
  { userData: { name: 'Boron', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Carbon', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Nitrogen', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi there' },
  { userData: { name: 'Oxygen', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Fluorine', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Neon', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi there' },
  { userData: { name: 'Sodium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, minus.' },
  { userData: { name: 'Magnesium', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique aperiam vero dolore minus hic corrupti voluptatem necessitatibus officia earum! Maiores!' },
  { userData: { name: 'Aluminum', email: 'aliciaVikander@mail.com' }, date: '28-05-23', message: 'Hi There' },
];

const CHAT_DATA = [
  { time: '22:48', name: 'Floxy Nina', message: 'Hey' },
  { time: '22:48', name: 'Alicia Stevens', message: 'Hi!' },
  { time: '22:50', name: 'Floxy Nina', message: 'Why did you add me?' },
  { time: '23:48', name: 'Alicia Stevens', message: 'I love your content' },
  { time: '22:49', name: 'Floxy Nina', message: 'Awww! Thank you' },
  { time: '00:03', name: 'Alicia Stevens', message: 'Can i send you a gift?' },
  { time: '00:03', name: 'Floxy Nina', message: 'Yes please... That’d be lovely' },
  { time: '00:06', name: 'Alicia Stevens', message: 'Sent' },
  { time: '00:09', name: 'Floxy Nina', message: 'Received.' },
  { time: '00:10', name: 'Alicia Stevens', message: 'Talk Later' }
];
@Component({
  selector: 'app-chats-archives',
  templateUrl: './chats-archives.component.html',
  styleUrls: ['./chats-archives.component.scss']
})
export class ChatsArchivesComponent implements OnInit {
  chatData: boolean = false;
  isUserTypeDateSearchShow: boolean = true;
  userTypes = ['User', 'Admin', 'Streamer'];
  displayedColumns: string[] = ['userData', 'date', 'message', 'btn'];
  chatColumns: string[] = ['time', 'name', 'message'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  chatDataSource = new MatTableDataSource<ChatElement>(CHAT_DATA);
  chatsList: any = [];
  chatDate: any;
  userType: any;
  searchValue: any;

  ngOnInit(): void {
  }

  chatDateChange(event) {
    this.chatDate = new Date(event.value).getDate() + '-' + new Date(event.value).getMonth() + '-' + new Date(event.value).getFullYear();
  }

  userTypeChange(event) {

  }

  viewMessage(messageData) {
    this.chatData = false;
    this.chatsList = this.chatDataSource.data;
    this.isUserTypeDateSearchShow = false;
  }

  searchChat(event) {
    this.chatsList = []
    this.chatData = true;
  }


  searchValueChange(event) {
    if (event.target.value.length > 3) {
      this.searchValue = event.target.value;
    }
  }

}