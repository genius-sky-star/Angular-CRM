import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.scss']
})
export class TimeFilterComponent {

  @Input() selected:string|undefined ;
  @Output() onChange: EventEmitter<'day' | 'week' | 'month' | 'year'> = new EventEmitter();

  onSelect(range: 'day' | 'week' | 'month' | 'year') {
    this.selected = range;
    this.onChange.emit(range);
  }
}
