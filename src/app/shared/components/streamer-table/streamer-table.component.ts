import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TableButtonAction } from '../../interfaces/tableButtonAction';
import { StreamerTableColumn } from '../../interfaces/streamerTableColumn';
import { SelectionModel } from '@angular/cdk/collections';
import { VideoPlayerComponent } from 'src/app/shared/components/video-player/video-player.component';

import { SelectedStreamerService } from 'src/app/shared/services/user-data/selected-streamer.service';

@Component({
  selector: 'app-streamer-table',
  templateUrl: './streamer-table.component.html',
  styleUrls: ['./streamer-table.component.scss'],
})
export class StreamerTableComponent implements OnInit {
  @Input() tableHeaderBackgroundColor: string | undefined;
  @Input() matheadercolor: string | undefined;
  @Input() isAction: boolean = false;
  @Input() isEditDeleteAction: boolean = false;
  @Input() isStreamer: string = 'main';
  @Input() route: string | undefined;
  @Input() columns: Array<StreamerTableColumn>;
  @Input() isLocation: boolean = false;
  @Input() isGoToProfile: boolean = false;
  @Input() isReviewAction: boolean = false;
  @Input() isPagenator: boolean = true;

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
  @Output() usernameClickEmitter = new EventEmitter<any>();
  @Output() reviewButtonEmitter = new EventEmitter<any>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value: any;

  constructor(
    private selectedStreamerService: SelectedStreamerService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x) => x.columnDef)
    ); // pre-fix static

    if (this.isAction === true) {
      this.displayedColumns.push('action');
      this.dataSource = new MatTableDataSource<any>(this.dataset);
      this.dataSource.paginator = this.paginator;
    }
    if (this.isEditDeleteAction === true) {
      this.displayedColumns.push('editDeleteAction');
    }

    if (this.isReviewAction === true) {
      this.displayedColumns.push('reviewAction');
      this.dataSource = new MatTableDataSource<any>(this.dataset);
      this.dataSource.paginator = this.paginator;
    }

    this.dataSource = new MatTableDataSource<any>(this.dataset);
    this.dataSource.paginator = this.paginator;
  }

  usernameClick(row: any) {
    this.usernameClickEmitter.emit(row);
  }

  reviewClick(element: any) {
    this.reviewButtonEmitter.emit(element);
  }

  onRowClick(row: any): void {
    this.matRowEmitter.emit(row);
  }

  initializeDataSource() {
    this.dataSource = new MatTableDataSource<any>(this.dataset);
    this.dataSource.paginator = this.paginator;
  }

  onTableAction(e: TableButtonAction): void {
    console.log('action pressed here', e);
    this.action.emit(e);
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

  onRowAction(row: any): void {
    if (this.isStreamer === 'main') {
      this.selectedStreamerService.setData(row);
      // this.router.navigateByUrl(this.route + '/streamer-detail');
    }
  }

  videoClick(videoUrl: string): void {
    const dialogRef = this.dialog.open(VideoPlayerComponent, {
      data: {
        videoUrl: videoUrl,
        title: 'Video Player',
        isVideo: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
