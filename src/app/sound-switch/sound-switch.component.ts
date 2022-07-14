import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-switch',
  templateUrl: './sound-switch.component.html',
  styleUrls: ['./sound-switch.component.scss']
})
export class SoundSwitchComponent implements OnInit {

  bgSound = new Audio('../assets/audio/background_sound_short.mp3');
  onAir = false;

  constructor() { }


  soundToggle() {
    if (this.bgSound.currentTime > 0) {
      this.bgSound.pause();
      this.bgSound.currentTime = 0;
      this.onAir = false;
    } else {
      this.bgSound.play();
      this.onAir = true;
    }
  }

  ngOnInit(): void {
    /** Background Sound will be played as a loop */
    this.bgSound.loop = true;
  }

}
