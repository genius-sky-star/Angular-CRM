import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, filter, from, mergeMap, tap } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { SupabaseService } from '../services/supabase/supabase.service';
@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private supabaseService: SupabaseService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return from(this.supabaseService.getSupabaseUser()).pipe(
      tap((user) => {
        const token = user.data.session?.access_token;
        const authorization = `Bearer ${token}`;
        let headers = request.headers;
        headers = headers.append('Authorization', authorization);
        request = request.clone({headers});
      }),
      mergeMap(() => next.handle(request))
    );

  }
}
