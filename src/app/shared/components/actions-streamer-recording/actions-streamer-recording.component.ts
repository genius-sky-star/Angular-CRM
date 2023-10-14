import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableButtonAction } from '../../interfaces/tableButtonAction';
import { TableConsts } from '../../consts/table';

@Component({
  selector: '[actions-streamer-recording]',
  templateUrl: './actions-streamer-recording.component.html',
  styleUrls: ['./actions-streamer-recording.component.scss'],
})
export class ActionsStreamerRecordingComponent implements OnInit {
  @Input() value: any;
  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  constructor() {}
  ngOnInit(): void {}

  onViewersClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.viewers,
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
