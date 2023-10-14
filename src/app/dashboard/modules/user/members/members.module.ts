import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { MatIconModule } from '@angular/material/icon';
import { TotalMembersComponent } from './total-members/total-members.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberComponent } from './member/member.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    MembersComponent,
    TotalMembersComponent,
    MemberComponent  
  ],
  imports: [
    MatSlideToggleModule,
    SharedModule,
    CommonModule,
    MembersRoutingModule,
    MatIconModule  
  ]
  
})
export class MembersModule { }
