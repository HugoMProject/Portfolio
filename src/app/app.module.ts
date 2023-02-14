import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './section/header/header.component';
import { BannerComponent } from './section/banner/banner.component';
import { SkillsComponent } from './section/skills/skills.component';
import { ProjectComponent } from './section/project/project.component';
import { AboutMeComponent } from './section/about-me/about-me.component';
import { FooterComponent } from './section/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SkillsComponent,
    ProjectComponent,
    AboutMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
