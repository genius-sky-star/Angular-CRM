import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() userData: any | undefined;
  datasource: MatSlideToggleModule;
  checked = false;
  disabled = false;
  fans: string | undefined;
  wallet: string | undefined;
  isExpand: boolean = false;
  constructor() {}
  ngOnInit(): void {
    console.log('this.userData:   ', this.userData);
    const ogs = Math.floor(this.userData.fans / 1000);
    if (ogs > 0) {
      this.fans = ogs.toString() + 'K';
    }

    const numberStr = this.userData.wallet.toString();
  }

  onViewMoreClick(): void {
    this.isExpand = !this.isExpand;
    console.log(this.isExpand);
  }
}
