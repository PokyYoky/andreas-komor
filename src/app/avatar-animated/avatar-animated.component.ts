import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-animated',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./avatar-animated.component.scss']
})
export class AvatarAnimatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
