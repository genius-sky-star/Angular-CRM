import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { UserNameInputComponent } from './components/user-name-input/user-name-input.component';



@NgModule({
  declarations: [
    InputComponent,
    MultiSelectComponent,
    UserNameInputComponent
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
    MultiSelectComponent,
    UserNameInputComponent
  ]
})
export class FormElementsModule { }
