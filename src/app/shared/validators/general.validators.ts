import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    if (!value) {
      return null;
    }

    if (!/[A-Z]/.test(value)) {
      return { uppercaseRequired: true };
    }

    if (!/[a-z]/.test(value)) {
      return { lowercaseRequired: true };
    }

    return null;
  };
}

export function emptyObjectValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: any = control.value;

    if (!value) {
      return null;
    }

    if (typeof value !== 'object') {
      return null;
    }

    if (Object.keys(value).length === 0) {
      return { emptyObject: true };
    }

    return null;
  };
}
