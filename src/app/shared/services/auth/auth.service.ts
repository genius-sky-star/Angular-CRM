import { Injectable } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';
import { AppEventType } from '../../enums/app-event-type.enum';
import { AppEvent } from '../../types/events/app-event.type';
import { EventQueueService } from '../event-queue/event-queue.service';
import { AuthError, AuthTokenResponse, User } from '@supabase/supabase-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private supabaseService: SupabaseService,
    private eventQueueService: EventQueueService,
    private router: Router
  ) { }

  async signIn(payload: { email: string, password: string }) {
    const {data, error} = await this.supabaseService.signInWithPassword(payload);
    if(error) {
      this.eventQueueService.dispatch(new AppEvent(AppEventType.LOGIN_FAILURE, error));
      return Promise.reject<AuthError>(error);
    } else {
      this.eventQueueService.dispatch(new AppEvent(AppEventType.LOGIN_SUCCESS, data));
      return Promise.resolve<AuthTokenResponse>(data as unknown as AuthTokenResponse);
    }
  }

  signInWithMagicLink(payload: { email: string}) {
    return this.supabaseService.signInWithMagicLink(payload);
  }

  async getUserFromSession() {
    const {data, error} = await this.supabaseService.getSupabaseUser();
    if(error || !data?.session) {
      this.eventQueueService.dispatch(new AppEvent(AppEventType.SESSION_EXPIRED, error));
      return Promise.reject<AuthError>(error);
    } else {
      this.eventQueueService.dispatch(new AppEvent(AppEventType.SESSION_VALID, data.session));
      return Promise.resolve<User>(data.session.user);
    }
  }

  async verifyMagicLink(payload: { email: string, token: string }) {
    const {data, error} = await this.supabaseService.verifyOtp(payload);
    if(error) {
      this.eventQueueService.dispatch(new AppEvent(AppEventType.LOGIN_FAILURE, error));
      return Promise.reject<AuthError>(error);
    } else {
      this.eventQueueService.dispatch(new AppEvent(AppEventType.LOGIN_SUCCESS, data));
      return Promise.resolve<AuthTokenResponse>(data as unknown as AuthTokenResponse);
    }
  }

  async signOut() {
    const { error } = await this.supabaseService.signOut();
    if(error) {
      this.eventQueueService.dispatch(new AppEvent(AppEventType.LOGOUT_FAILURE, error));
      return;
    }
    this.router.navigateByUrl('/login');
    this.eventQueueService.dispatch(new AppEvent(AppEventType.LOGOUT_SUCCESS));
  }
}
