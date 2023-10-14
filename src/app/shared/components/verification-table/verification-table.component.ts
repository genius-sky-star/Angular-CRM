import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { StreamerTableColumn } from '../../interfaces/streamerTableColumn';
import { VerifyTableColumn } from '../../interfaces/verifyTableColumn';
import { MatDialog } from '@angular/material/dialog';

import { AvatarEditorComponent } from 'src/app/shared/components/avatar-editor/avatar-editor.component';

@Component({
  selector: 'app-verification-table',
  templateUrl: './verification-table.component.html',
  styleUrls: ['./verification-table.component.scss'],
})
export class VerificationTableComponent implements OnInit {
  @Input() columns: Array<VerifyTableColumn>;

  _dataset;
  @Input()
  set dataset(v) {
    this._dataset = v;
    this.initializeDataSource();
  }
  get dataset() {
    return this._dataset;
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.dataSource.data);
    console.log(this.columns);
    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x) => x.columnDef)
    ); // pre-fix static

    this.dataSource = new MatTableDataSource<any>(this.dataset);
  }

  initializeDataSource() {
    this.dataSource = new MatTableDataSource<any>(this.dataset);
  }

  sortData(sort: Sort) {
    const data = [...this.dataSource.data];
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    const sortedData = data.sort((a, b) => {
      console.log('sort.direction', sort.direction);

      const isAsc = sort.direction === 'asc';

      const activeColumn = sort.active;
      return isAsc
        ? a[activeColumn].localeCompare(b[activeColumn])
        : b[activeColumn].localeCompare(a[activeColumn]);
    });

    this.dataSource.data = sortedData;
  }

  onViewClick(row) {
    console.log(row);
    const dialogRef = this.dialog.open(AvatarEditorComponent, {
      data: { row: row },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  onApprove() {
    console.log('Approve');
  }
  onReject() {
    console.log('Reject');
  }
}
