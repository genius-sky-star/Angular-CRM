import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private readonly apiService: ApiService) { }

  createRole(payload) { // TODO: Type properly
    return this.apiService.post<{[key: string]: string}>('/roles', payload)
    .pipe(map(res => {
      console.log(res);
      return res['data'];
    }));
  }

  createAdmin(payload) {// TODO: Type properly
    return this.apiService.post<{[key: string]: string}>('/admin', payload)
    .pipe(map(res => {
      console.log(res);
      return res['data'];
    }));
  }

  updateAdmin(payload)  {// TODO: Type properly
    let id = payload.id;
    delete payload.id;
    return this.apiService.patch<{[key: string]: string}>(`/admin/user/${id}`, payload)
    .pipe(map(res => {
      console.log(res);
      return res['data'];
    }));
  }

  deleteAdmin(id)  {// TODO: Type properly
    return this.apiService.delete<{[key: string]: string}>(`/admin/user/${id}`)
    .pipe(map(res => {
      console.log(res);
      return res['data'];
    }));
  }

  getPermissions() {
    return this.apiService.get<{[key: string]: string}>('/roles/permissions')
    .pipe(map(res => {
      console.log(res);
      return res['data'];
    }));
  }

  getRoles() {
    return this.apiService.get<{[key: string]: string}>('/roles')
    .pipe(map(res => {
      console.log(res);
      return res['data'];
    }));
  }

  updateRole(payload)  {// TODO: Type properly
    let id = payload.id;
    delete payload.id;
    return this.apiService.patch<{[key: string]: string}>(`/roles/${id}`, payload)
    .pipe(map(res => {
      console.log(res);
      return res['data'];
    }));
  }

  deleteRole(id)  {// TODO: Type properly
    return this.apiService.delete<{[key: string]: string}>(`/roles/${id}`)
    .pipe(map(res => {
      console.log(res);
      return res['data'];
    }));
  }
  

  getUserList() {
    // return this.apiService.get('/admin/user').subscribe(async data => {

    // })

    return this.apiService.get<{[key: string]: string}>('/admin/user')
    .pipe(map(res => {
      console.log(res);
      return res['data'];
    }));
  }
}