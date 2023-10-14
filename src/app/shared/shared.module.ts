import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultModalComponent } from './components/default-modal/default-modal.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { TableCommonComponent } from './components/table-common/table-common.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { CountSummaryComponent } from './components/count-summary/count-summary.component';
import { AnalyticHeaderComponent } from './components/analytic-header/analytic-header.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TimeFilterComponent } from './components/time-filter/time-filter.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { TrendAnalyticsComponent } from './components/trend-analytics/trend-analytics.component';
import { TokenAnalyticsComponent } from './components/token-analytics/token-analytics.component';
import { EstimateAnalysisComponent } from './components/estimate-analysis/estimate-analysis.component';
import { OverviewAnalysisComponent } from './components/overview-analysis/overview-analysis.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { TableActionDirective } from './directives/table-action.directive';
import { ActionButtonsComponent } from './components/actions-buttons/actions-buttons.component';
import { AddTokenSidenavBarComponent } from './components/add-token-sidenav-bar/add-token-sidenav-bar.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ArchiveActionButtonsComponent } from './components/archive-actions-buttons/archive-actions-buttons.component';
import { ViewWithSidebarComponent } from './components/view-with-sidebar/view-with-sidebar.component';
import { EditDeleteActionButtonsComponent } from './components/edit-delete-actions-buttons/edit-delete-actions-buttons.component';
import { ActionsStreamerComponent } from './components/actions-streamer/actions-streamer.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserDetailTabComponent } from './components/user-detail-tab/user-detail-tab.component';
import { DigitalProductPurchaseComponent } from './components/digital-product-purchase/digital-product-purchase.component';
import { SessionAttendedBarCharComponent } from './components/session-attended-bar-char/session-attended-bar-char.component';
import { StreamerTableComponent } from './components/streamer-table/streamer-table.component';
import { StreamerColumnChartComponent } from './components/streamer-column-chart/streamer-column-chart.component';
import { TimeSpentAnalyticsComponent } from './components/time-spent-analytics/time-spent-analytics.component';
import { CountEarningSummaryComponent } from './components/count-earning-summary/count-earning-summary.component';
import { HalfCircleChartComponent } from './components/half-circle-chart/half-circle-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ActionsStreamerRecordingComponent } from './components/actions-streamer-recording/actions-streamer-recording.component';
import { ActionsGoToProfileComponent } from './components/actions-go-to-profile/actions-go-to-profile.component';
import { ActionProductsComponent } from './components/action-products/action-products.component';
import { EditSidenavBarComponent } from './components/edit-sidenav-bar/edit-sidenav-bar.component';
import { ListCommonSidenavComponent } from './components/list-common-sidenav/list-common-sidenav.component';
import { VerificationTableComponent } from './components/verification-table/verification-table.component';
import { AvatarEditorComponent } from './components/avatar-editor/avatar-editor.component';
import { DayPilotModule } from '@daypilot/daypilot-lite-angular';
import { CalenderDataService } from 'src/app/shared/services/data/caleaner.service';
import { ActionDialogComponent } from './components/action-dialog/action-dialog.component';
import { ArchiveActionsComponent } from './components/archive-actions/archive-actions.component';

@NgModule({
  declarations: [
    TableActionDirective,
    HeaderComponent,
    DefaultModalComponent,
    ActionButtonsComponent,
    TableCommonComponent,
    WorldMapComponent,
    CountSummaryComponent,
    AnalyticHeaderComponent,
    LineChartComponent,
    BarChartComponent,
    TimeFilterComponent,
    DoughnutChartComponent,
    TrendAnalyticsComponent,
    TokenAnalyticsComponent,
    EstimateAnalysisComponent,
    OverviewAnalysisComponent,
    AddTokenSidenavBarComponent,
    VideoPlayerComponent,
    ArchiveActionButtonsComponent,
    ViewWithSidebarComponent,
    EditDeleteActionButtonsComponent,
    ActionsStreamerComponent,
    SubMenuComponent,
    UserInfoComponent,
    UserDetailTabComponent,
    DigitalProductPurchaseComponent,
    SessionAttendedBarCharComponent,
    HalfCircleChartComponent,
    StreamerTableComponent,
    ActionsStreamerRecordingComponent,
    TimeSpentAnalyticsComponent,
    CountEarningSummaryComponent,
    StreamerColumnChartComponent,
    ActionsGoToProfileComponent,
    ActionProductsComponent,
    EditSidenavBarComponent,
    ListCommonSidenavComponent,
    VerificationTableComponent,
    AvatarEditorComponent,
    ScheduleCalendarComponent,
    ActionDialogComponent,
    ArchiveActionsComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    NgxPermissionsModule,
    FontAwesomeModule,
    MatTableModule,
    MatSortModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxKey,
    }),
    // BrowserModule,
    NgApexchartsModule,
    DayPilotModule,
  ],
  providers: [CalenderDataService],
  exports: [
    HeaderComponent,
    DefaultModalComponent,
    TableCommonComponent,
    WorldMapComponent,
    CountSummaryComponent,
    AnalyticHeaderComponent,
    LineChartComponent,
    BarChartComponent,
    TimeFilterComponent,
    DoughnutChartComponent,
    TrendAnalyticsComponent,
    TokenAnalyticsComponent,
    EstimateAnalysisComponent,
    OverviewAnalysisComponent,
    HeaderComponent,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    NgxMapboxGLModule,
    HttpClientModule,
    AddTokenSidenavBarComponent,
    ViewWithSidebarComponent,
    SubMenuComponent,
    UserInfoComponent,
    UserDetailTabComponent,
    DigitalProductPurchaseComponent,
    SessionAttendedBarCharComponent,
    HalfCircleChartComponent,
    StreamerTableComponent,
    ActionsStreamerRecordingComponent,
    StreamerColumnChartComponent,
    ActionProductsComponent,
    EditSidenavBarComponent,
    ListCommonSidenavComponent,
    VerificationTableComponent,
    VideoPlayerComponent,
    AvatarEditorComponent,
    ScheduleCalendarComponent,
    DayPilotModule,
  ],
})
export class SharedModule {}
