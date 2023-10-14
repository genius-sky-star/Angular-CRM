import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const routes: Routes = [  
  {
    path: '', component: UserComponent, 
    children: [
      {
        path: 'members',
        loadChildren: () => import('./members/members.module').then(m => m.MembersModule)
      },
      {
        path: 'streamers',
        loadChildren: () => import('./streamers/streamers.module').then(s => s.StreamersModule)
      },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
