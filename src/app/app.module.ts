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
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { SkillSwitchComponent } from './skill-switch/skill-switch.component';
import { AvatarAnimatedComponent } from './avatar-animated/avatar-animated.component';
import { AvatarStaticComponent } from './avatar-static/avatar-static.component';
import { PageContentComponent } from './page-content/page-content.component';
import { StoryCardsComponent } from './story-cards/story-cards.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillPageComponent,
    SkillCardsComponent,
    SoundSwitchComponent,
    ArrowDownComponent,
    AvatarComponent,
    WelcomeComponent,
    ProjectCardsComponent,
    SkillSwitchComponent,
    AvatarAnimatedComponent,
    AvatarStaticComponent,
    PageContentComponent,
    StoryCardsComponent,
    ContactPageComponent,
    LoadSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
