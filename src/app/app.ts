import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './shared/menu/menu';
import { SocialMedia } from './shared/social-media/social-media';
import { HeroPage } from './pages/hero-page/hero-page';
import { AboutPage } from './pages/about-page/about-page';
import { SkillsPage } from "./pages/skills-page/skills-page";
import { WorksPage } from "./pages/works-page/works-page";
import { ContactPage } from "./pages/contact-page/contact-page";
import { LegalNotice } from "./pages/legal-notice/legal-notice";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, SocialMedia, HeroPage, AboutPage, SkillsPage, WorksPage, ContactPage, LegalNotice],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

}