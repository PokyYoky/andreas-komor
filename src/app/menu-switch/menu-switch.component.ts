import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-switch',
  templateUrl: './menu-switch.component.html',
  styleUrls: ['./menu-switch.component.scss']
})
export class MenuSwitchComponent implements OnInit {

  openedMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.openedMenu = !this.openedMenu;
  }
}
