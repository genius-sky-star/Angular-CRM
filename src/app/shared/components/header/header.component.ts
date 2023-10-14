import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EventQueueService } from '../../services/event-queue/event-queue.service';
import { AppEventType } from '../../enums/app-event-type.enum';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpened: boolean = false;
  isLoggedIn: boolean = false;

  tabs: string[] = [
    'Members',
    'Streamers',
    'Featured Models',
    'Physical Goods',
    'User Stats',
    'User Permissions',
  ];
  currentMenu = 'dashboard';
  constructor(
    private authService: AuthService,
    private eventQueueService: EventQueueService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initializeHeader();
  }

  onMenuItemClicked(evt) {
    console.log(evt);
  }

  private initializeHeader() {
    this.eventQueueService.on(AppEventType.SESSION_VALID).subscribe(() => {
      console.log('User is logged in');
      this.isLoggedIn = true;
      this.cd.detectChanges();
    });

    this.eventQueueService.on(AppEventType.LOGIN_SUCCESS).subscribe(() => {
      console.log('User is logged in');
      this.isLoggedIn = true;
      this.cd.detectChanges();
    });

    this.eventQueueService.on(AppEventType.LOGOUT_SUCCESS).subscribe(() => {
      console.log('User is logged out');
      this.isLoggedIn = false;
      this.cd.detectChanges();
    });

    this.eventQueueService.on(AppEventType.SESSION_EXPIRED).subscribe(() => {
      console.log('User is logged out');
      this.isLoggedIn = false;
      this.cd.detectChanges();
    });
  }

  logout() {
    this.authService.signOut();
  }
}
