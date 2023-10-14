import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableButtonAction } from '../../interfaces/tableButtonAction';
import { TableConsts } from '../../consts/table';

@Component({
  selector: '[archive-action-buttons]',
  templateUrl: './archive-actions-buttons.component.html',
  styleUrls: ['./archive-actions-buttons.component.scss'],
})
export class ArchiveActionButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() value: string;
  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  onViewRecordingClick() {
    this.buttonAction.emit({
      name: TableConsts.archiveRecordingActionButton.view,
      value: this.value,
    });
  }

  onDeleteRecording() {
    this.buttonAction.emit({
      name: TableConsts.archiveRecordingActionButton.delete,
      value: this.value,
    });
  }
}
