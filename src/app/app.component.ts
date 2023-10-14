import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthError } from '@supabase/supabase-js';
import { EventQueueService } from './shared/services/event-queue/event-queue.service';
import { NavigationEnd, Router } from '@angular/router';
import { AppEventType } from './shared/enums/app-event-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private eventQueueService: EventQueueService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeApp();
  }

  private async initializeApp() {
    this.eventQueueService.on(AppEventType.SESSION_EXPIRED).subscribe(() => {
      console.log('logging out...');
      this.router.navigateByUrl('/login');
    });
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        await this.authService.getUserFromSession();
      }
    });
  }
}
