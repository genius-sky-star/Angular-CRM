import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableButtonAction } from '../../interfaces/tableButtonAction';
import { TableConsts } from '../../consts/table';

@Component({
  selector: '[actions-buttons]',
  templateUrl: './actions-buttons.component.html',
  styleUrls: ['./actions-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() value: string;
  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  onLoginClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.login,
      value: this.value,
    });
  }

  onAddTokensClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.addTokens,
      value: this.value,
    });
  }

  onBanClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.ban,
      value: this.value,
    });
  }
  onDeleteClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.delete,
      value: this.value,

    });
  }

  onSuspendClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.suspend, value: this.value,
    });
  }
}
