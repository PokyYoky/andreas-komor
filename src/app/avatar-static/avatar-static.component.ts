import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-static',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./avatar-static.component.scss']
})
export class AvatarStaticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
