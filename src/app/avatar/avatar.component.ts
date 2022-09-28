import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})

export class AvatarComponent implements OnInit {
  @Input() imgPath: string = './assets/img/me_640.jpg';
  @Input() imgAlt: string = 'Andreas Komor';
  @Input() imgPadding: string = 'padding: 0';

  imgWidth: number = 400;
  imgHeight: number = 400;

  constructor() { }

  ngOnInit(): void {
    this.setImgSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.setImgSize();
  }

  setImgSize() {
    let size: number = window.innerWidth / 8;
    this.imgWidth = (size <= 80) ? size : 80;
    this.imgHeight = this.imgWidth;
  }
}