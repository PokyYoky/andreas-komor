import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss']
})
export class LanguageSwitchComponent implements OnInit {

  clicked: boolean = false;

  constructor(public translate: TranslateService) {
    translate.use('de');
  }

  ngOnInit(): void {
  }
}
