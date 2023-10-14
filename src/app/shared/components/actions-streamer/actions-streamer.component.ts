import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableButtonAction } from '../../interfaces/tableButtonAction';
import { TableConsts } from '../../consts/table';

@Component({
  selector: '[actions-streamer]',
  templateUrl: './actions-streamer.component.html',
  styleUrls: ['./actions-streamer.component.scss'],
})
export class ActionsStreamerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() value: string;
  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  onEditClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    });
  }

  onLoginClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.login,
      value: this.value,
    });
  }

  onBanClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.ban,
      value: this.value,
    });
  }
  onSuspendClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.suspend,
      value: this.value,
    });
  }

  onStopStreamClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.stopstream,
      value: this.value,
    });
  }

  onDeleteClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.delete,
      value: this.value,
    });
  }
}
