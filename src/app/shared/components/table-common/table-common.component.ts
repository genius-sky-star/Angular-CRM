import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TableButtonAction } from '../../interfaces/tableButtonAction';
import { TableColumn } from '../../interfaces/tableColumn';
import { SelectionModel } from '@angular/cdk/collections';
import { SelectedStreamerService } from 'src/app/shared/services/user-data/selected-streamer.service';

@Component({
  selector: 'app-table-common',
  templateUrl: './table-common.component.html',
  styleUrls: ['./table-common.component.scss'],
})
export class TableCommonComponent implements OnInit {
  @Input() tableHeaderBackgroundColor: string | undefined;
  @Input() matheadercolor: string | undefined;
  @Input() isAction: boolean = false;
  @Input() isEditDeleteAction: boolean = false;
  @Input() isStreamer: boolean = false;
  @Input() route: string | undefined;
  @Input() columns: Array<TableColumn>;
  @Input() isArchiveAction: boolean = false;
  @Input() isOddRowsChangeColor: boolean = false;
  @Input() isChangeSize: boolean = false;
  @Input() isReviewAction: boolean = false;

  _dataset;
  @Input()
  set dataset(v) {
    this._dataset = v;
    this.initializeDataSource();
  }
  get dataset() {
    return this._dataset;
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Output() action: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  @Output() matRowEmitter = new EventEmitter<any>();
  @Output() buttonClickEmitter = new EventEmitter<any>();
  @Output() usernameClickEmitter = new EventEmitter<any>();
  @Output() reviewButtonEmitter = new EventEmitter<any>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value: any;

  constructor(
    private selectedStreamerService: SelectedStreamerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x) => x.columnDef)
    ); // pre-fix static

    if (this.isReviewAction === true) {
      this.displayedColumns.push('reviewAction');
      this.dataSource = new MatTableDataSource<any>(this.dataset);
      this.dataSource.paginator = this.paginator;
    }

    if (this.isAction === true) {
      this.displayedColumns.push('action');
      this.dataSource = new MatTableDataSource<any>(this.dataset);
      this.dataSource.paginator = this.paginator;
    }
    if (this.isEditDeleteAction === true) {
      this.displayedColumns.push('editDeleteAction');
    }

    if (this.isArchiveAction === true) {
      this.displayedColumns.push('archive-action');
    }
    this.dataSource = new MatTableDataSource<any>(this.dataset);
    this.dataSource.paginator = this.paginator;
  }

  usernameClick(row: any) {
    this.usernameClickEmitter.emit(row);
  }

  buttonClick(row: any) {
    this.buttonClickEmitter.emit(row);
  }

  reviewClick(element: any) {
    console.log('second:   ', element);
    this.reviewButtonEmitter.emit(element);
  }

  onRowClick(row: any): void {
    this.matRowEmitter.emit(row);
  }

  initializeDataSource() {
    this.dataSource = new MatTableDataSource<any>(this.dataset);
    this.dataSource.paginator = this.paginator;
  }

  onTableAction(e: TableButtonAction, element: any): void {
    e.value = element;
    this.action.emit(e);
  }

  sortData(sort: Sort) {
    const data = [...this.dataSource.data];
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    const sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';

      const activeColumn = sort.active;
      return isAsc
        ? a[activeColumn].localeCompare(b[activeColumn])
        : b[activeColumn].localeCompare(a[activeColumn]);
    });

    this.dataSource.data = sortedData;
  }

  onRowAction(row: any): void {
    if (this.isStreamer) {
      this.selectedStreamerService.setData(row);
      console.log(this.route + '/streamer-detail');
      console.log(this.selectedStreamerService.getData());
      this.router.navigateByUrl(this.route + '/streamer-detail');
    }
  }
}
