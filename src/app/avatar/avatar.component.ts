import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DOMListenerService } from '../domlistener.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})

export class AvatarComponent implements OnInit {
  @Input() imgPath: string = './assets/img/me_640.jpg';
  @Input() imgAlt: string = 'Andreas Komor';
  @Input() imgPadding: string = 'padding: 0';
  @Input() isIcon: boolean = false;

  imgWidth: number = 400;
  imgHeight: number = 400;

  constructor(private viewport: DOMListenerService) { }

  ngOnInit(): void {
    this.setImgSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.setImgSize();
  }

  setImgSize() {
    let size: number = 0;

    if (!this.isIcon) {
      size = this.viewport.VMin / 6;
      this.imgWidth = (size >= 120) ? size : 120;
    } else {
      size = this.viewport.VMin / 16;
      this.imgWidth = (size >= 60) ? size : 60;
    }
    this.imgHeight = this.imgWidth;
  }
}