import { Component, Input, forwardRef } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-user-name-input',
  templateUrl: './user-name-input.component.html',
  styleUrls: ['./user-name-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserNameInputComponent),
      multi: true,
    }
  ]
})
export class UserNameInputComponent extends InputComponent {
  @Input() extensionText: string;
}
