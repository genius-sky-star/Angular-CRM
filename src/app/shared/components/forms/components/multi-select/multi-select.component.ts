import { Component, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true,
    },
  ],
})
export class MultiSelectComponent implements OnChanges, ControlValueAccessor {

  @Input() config: IDropdownSettings = {};

  @Input() label: string;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() data: {[key: string]: any}[] = [];
  @Input() defaultSelectedValue: {[key: string]: any}[] = [];

  isDisabled = false;
  selectedValue: {[key: string]: any}[] = []; //TODO: Fix to rely on type from config.[idField/textField]
  defaultConfig: IDropdownSettings = {
    singleSelection: false,
    idField: 'value',
    // searchPlaceholderText: 'Start typing to filter',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  private onChange: any = () => { };
  private onTouched: any = () => { };

  constructor() {
    this.selectedValue = this.defaultSelectedValue || [];
  }

  writeValue(selectedValue: any): void {
    console.log(selectedValue);
    this.selectedValue = selectedValue || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange() {
    this.onChange(this.selectedValue);
    this.onTouched();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedValue);
    if(!this.selectedValue) {
      this.selectedValue = [];
    }
    if(changes?.['data']?.currentValue) {
      this.data = changes['data'].currentValue;
    }
    if(changes?.['config']?.currentValue) {
      this.config = {...this.defaultConfig, ...changes['config'].currentValue};
    }
  }

  onFilterChange(evt) {
    console.log('onFilterChange', evt);
  }
  onItemSelect(evt) {
    console.log('onItemSelect', evt);
    this.selectedValue.push(evt);
    this.onInputChange();
  }
  onDeSelect(evt) {
    console.log('onDeSelect', evt);
    const index = this.selectedValue.findIndex(value => evt[this.config.idField] === value[this.config.idField]);
    if(index > -1) {
      this.selectedValue.splice(index, 1);
      this.onInputChange();
    }
  }
  onSelectAll(evt) {
    console.log('onSelectAll', evt);
    this.selectedValue = evt;
    this.onInputChange();
  }
  onDropDownClose(evt) {
    // console.log('onDropDownClose', evt);
  }
  onDeSelectAll(evt) {
    console.log('onDeSelectAll', evt);
    this.selectedValue = evt;
    this.onInputChange();
  }


}
