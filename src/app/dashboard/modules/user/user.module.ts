import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';


@NgModule({

  imports: [
    HomeModule,
    CommonModule,
    UserRoutingModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    UserComponent      ],
})
export class UserModule { }
