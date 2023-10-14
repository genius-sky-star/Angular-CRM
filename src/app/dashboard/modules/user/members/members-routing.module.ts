import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members.component';
import { TotalMembersComponent } from './total-members/total-members.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {
    path:'',component:MembersComponent
  },
  {
    path:'total-members',
    component : TotalMembersComponent
  },
  {
    path:':username',
    component: MemberComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
