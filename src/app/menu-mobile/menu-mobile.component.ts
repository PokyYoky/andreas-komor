import { Component, OnInit} from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  constructor(public menuSwitch: SwitchService) { }

  ngOnInit(): void {
  }
}
