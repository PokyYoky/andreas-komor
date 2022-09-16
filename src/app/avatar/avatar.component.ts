import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})

export class AvatarComponent implements OnInit {
  @Input() imgPath: string = './assets/img/me_640.jpg';
  @Input() imgAlt: string = 'Andreas Komor';
  @Input() imgPadding: string = 'padding: 0';

  constructor() { }

  ngOnInit(): void {
  }

}
