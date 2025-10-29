import { Component } from '@angular/core';
import { HeroPage } from './hero-page/hero-page';
import { AboutPage } from './about-page/about-page';
import { SkillsPage } from "./skills-page/skills-page";
import { WorksPage } from "./works-page/works-page";
import { ContactPage } from "./contact-page/contact-page";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [HeroPage, AboutPage, SkillsPage, WorksPage, ContactPage, RouterModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})

export class MainPage {

}
