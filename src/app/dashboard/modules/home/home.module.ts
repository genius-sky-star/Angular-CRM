import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
HomeComponent
  ],
  imports: [
    MatTableModule,
    MatSortModule,
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class HomeModule { }
