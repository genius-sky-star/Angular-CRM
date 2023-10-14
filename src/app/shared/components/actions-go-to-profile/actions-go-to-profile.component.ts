import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableButtonAction } from '../../interfaces/tableButtonAction';

@Component({
  selector: '[actions-go-to-profile]',
  templateUrl: './actions-go-to-profile.component.html',
  styleUrls: ['./actions-go-to-profile.component.scss'],
})
export class ActionsGoToProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() value: string;
  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  onGoToProfileClick() {
    this.buttonAction.emit({
      name: 'Gotoprofile',
      value: this.value,
    });
  }
}
