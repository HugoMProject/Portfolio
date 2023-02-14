import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectComponent } from '../section-project/project.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    SkillsComponent,
    ProjectComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],exports:[
    HeaderComponent,
    BannerComponent,
    SkillsComponent,
    ProjectComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class SectionModule { }
