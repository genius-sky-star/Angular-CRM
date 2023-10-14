import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormElementsModule } from 'src/app/shared/components/forms/form-elements.module';


@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule,
    FormElementsModule,
  ]
})
export class RolesModule { }
