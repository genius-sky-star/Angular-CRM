import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableButtonAction } from '../../interfaces/tableButtonAction';

@Component({
  selector: '[action-products]',
  templateUrl: './action-products.component.html',
  styleUrls: ['./action-products.component.scss'],
})
export class ActionProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() value: string;
  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  onViewClick() {
    this.buttonAction.emit({
      name: 'View',
      value: this.value,
    });
  }

  onViewHistoryClick() {
    this.buttonAction.emit({
      name: 'ViewHistory',
      value: this.value,
    });
  }
}
