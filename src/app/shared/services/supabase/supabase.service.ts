import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment';
import { SupabaseProfile } from '../../interfaces/supabase-profile';
import { EventQueueService } from '../event-queue/event-queue.service';
import { AppEvent } from '../../types/events/app-event.type';
import { AppEventType } from '../../enums/app-event-type.enum';
import { StoreService } from '../store/store.service';
import { StoreKey } from '../../enums/store.enum';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private readonly supabase: SupabaseClient;
  _session: AuthSession | null = null

  constructor(private store: StoreService) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single();
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  async signInWithPassword(payload: { email: string, password: string }) {
    const resultPromise = this.supabase.auth.signInWithPassword(payload);
    const { data } = await resultPromise;
    if(data?.user) {
      this.store.saveData(StoreKey.SUPABASE_USER, data.user);
    }
    return resultPromise;
  }

  async signInWithMagicLink(payload: { email: string }) {
    const resultPromise =  this.supabase.auth.signInWithOtp({ ...payload, options: {
      emailRedirectTo: environment.supabaseEmailRedirect,
      shouldCreateUser: false,
    }});
    const { data } = await resultPromise;
    if(data?.user) {
      this.store.saveData(StoreKey.SUPABASE_USER, data.user);
    }
    return resultPromise;
  }

  async verifyOtp(payload: {email: string, token: string }) {
    const resultPromise = this.supabase.auth.verifyOtp({ ...payload, type: 'email'})
    const { data } = await resultPromise;
    if(data?.user) {
      this.store.saveData(StoreKey.SUPABASE_USER, data.user);
    }
    return resultPromise;
  }

  async getSupabaseUser() {
    return this.supabase.auth.getSession();
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  updateProfile(profile: SupabaseProfile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update)
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }
}
