import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SUB_MENUS, SubMenu } from './sub-menus';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit, OnChanges {
  currentMenuItems: SubMenu;
  private submenus = SUB_MENUS;
  @Input() menu: string;

  @Output() subMenuClicked: EventEmitter<string> = new EventEmitter();
  subMenuPaths: { key: string; path: any }[] = [];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.subMenuPaths = Object.keys(this.submenus).map((menuConfig) => ({
      key: menuConfig,
      path: this.submenus[menuConfig]?.path,
    }));
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.currentMenuItems =
          this.submenus[
            this.subMenuPaths.find((menu) =>
              evt.url.startsWith(menu?.path)
            )?.key
          ];
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['menu'].currentValue &&
      this.submenus[changes['menu'].currentValue]
    ) {
      this.currentMenuItems = this.submenus[changes['menu'].currentValue];
    }
  }

  onSubMenuClicked(subMenuName: string) {
    this.subMenuClicked.emit(subMenuName);
  }
}
