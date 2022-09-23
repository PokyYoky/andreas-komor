import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-menu-switch',
  templateUrl: './menu-switch.component.html',
  styleUrls: ['./menu-switch.component.scss']
})
export class MenuSwitchComponent implements OnInit {

  openedMenu: boolean = false;

  constructor(public menuSwitch: SwitchService) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.openedMenu = !this.openedMenu;
    this.menuSwitch.status = this.openedMenu;
  }
}
