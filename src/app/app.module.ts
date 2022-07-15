import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillPageComponent } from './skill-page/skill-page.component';
import { SkillCardsComponent } from './skill-cards/skill-cards.component';
import { SoundSwitchComponent } from './sound-switch/sound-switch.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { AvatarComponent } from './avatar/avatar.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillPageComponent,
    SkillCardsComponent,
    SoundSwitchComponent,
    ArrowDownComponent,
    AvatarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
