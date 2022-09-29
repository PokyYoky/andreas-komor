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
import { UserMessageComponent } from './user-message/user-message.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { MenuSwitchComponent } from './menu-switch/menu-switch.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
    LoadSpinnerComponent,
    UserMessageComponent,
    FooterComponent,
    ImprintComponent,
    MainPageComponent,
    MenuMobileComponent,
    MenuNavComponent,
    MenuSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
