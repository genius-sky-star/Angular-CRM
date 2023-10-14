import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseURL = environment.apiUrl;

  constructor(private http: HttpClient, private loadingService: LoadingService) { }


  post<T>(
    endpoint: string,
    body: { [key: string]: any } | FormData = {},
    loaderConfig = {showLoader: true, message: 'Loading...'},
    headers: { [key: string]: string } = {}): Observable<T> {

    if(loaderConfig.showLoader){
      this.presentLoading(loaderConfig.message);
    }
    return this.http.post<T>(`${this.baseURL}${endpoint}`, body, {
      headers
    }).pipe(tap(res => {
      if (loaderConfig.showLoader) {
        this.loadingService.hide();
      }
    }), catchError(err => {
      if (loaderConfig.showLoader) {
        this.loadingService.hide();
      }
      return throwError(err);
    }));
  }

  get<T>(
    endpoint: string,
    parameters?: { [key: string]: string },
    loaderConfig: {showLoader: boolean; message?: string} = {showLoader: true, message: 'Loading...'},
    headers: { [key: string]: string } = {}): Observable<T> {
    if(loaderConfig.showLoader){
      this.presentLoading(loaderConfig?.message);
    }
    const params = new HttpParams({fromObject: parameters});
    return this.http.get<T>(`${this.baseURL}${endpoint}`, {
      params,
      headers
    }).pipe(tap(() => {
      if(loaderConfig.showLoader) {
        this.loadingService.hide();
      }
    }), catchError(err => {
      if (loaderConfig.showLoader) {
        this.loadingService.hide();
      }
      return throwError(err);
    }));
  }

  put<T = any>(
    endpoint: string,
    body: { [key: string]: any } | FormData = {},
    loaderConfig = {showLoader: true, message: 'Loading...'},
    headers: { [key: string]: string } = {}): Observable<T> {

    if(loaderConfig.showLoader){
      this.presentLoading(loaderConfig.message);
    }
    return this.http.put<T>(`${this.baseURL}${endpoint}`, body, {
      headers
    }).pipe(tap(res => {
      if (loaderConfig.showLoader) {
        this.loadingService.hide();
      }
    }), catchError(err => {
      if (loaderConfig.showLoader) {
        this.loadingService.hide();
      }
      return throwError(err);
    }));
  }

  patch<T = any>(
    endpoint: string,
    body: { [key: string]: any } | FormData = {},
    loaderConfig = {showLoader: true, message: 'Loading...'},
    headers: { [key: string]: string } = {}): Observable<T> {

    if(loaderConfig.showLoader){
      this.presentLoading(loaderConfig.message);
    }
    return this.http.patch<T>(`${this.baseURL}${endpoint}`, body, {
      headers
    }).pipe(tap(res => {
      if (loaderConfig.showLoader) {
        this.loadingService.hide();
      }
    }), catchError(err => {
      if (loaderConfig.showLoader) {
        this.loadingService.hide();
      }
      return throwError(err);
    }));
  }

  delete<T = any>(
    endpoint: string,
    parameters?: { [key: string]: any },
    loaderConfig: {showLoader: boolean; message?: string} = {showLoader: true, message: 'Loading...'},
    headers: { [key: string]: string } = {}): Observable<T> {
    if(loaderConfig.showLoader){
      this.presentLoading(loaderConfig.message);
    }
    const params = new HttpParams({fromObject: parameters});
    return this.http.delete<T>(`${this.baseURL}${endpoint}`, {
      params,
      headers
    }).pipe(tap(() => {
      if(loaderConfig.showLoader) {
        this.loadingService.hide();
      }
    }), catchError(err => {
      if (loaderConfig.showLoader) {
        this.loadingService.hide();
      }
      return throwError(err);
    }));
  }

  async presentLoading(message?: string) {
    this.loadingService.show({
      message,
      spinner: 'bubbles'
    });
  }
}
