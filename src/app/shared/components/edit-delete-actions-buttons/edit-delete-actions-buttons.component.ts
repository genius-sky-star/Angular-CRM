import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableButtonAction } from '../../interfaces/tableButtonAction';
import { TableConsts } from '../../consts/table';

@Component({
  selector: '[edit-delete-action-buttons]',
  templateUrl: './edit-delete-actions-buttons.component.html',
  styleUrls: ['./edit-delete-actions-buttons.component.scss']
})
export class EditDeleteActionButtonsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input() value: string
  @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()


  edit(){
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    })
  }
  delete() {
    this.buttonAction.emit({ 
      name: TableConsts.actionButton.delete,
      value: this.value, 
    })
  }
}