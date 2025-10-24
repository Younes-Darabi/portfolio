import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './shared/menu/menu';
import { SocialMedia } from './shared/social-media/social-media';
import { HeroPage } from './pages/hero-page/hero-page';
import { AboutPage } from './pages/about-page/about-page';
import { SkillsPage } from "./pages/skills-page/skills-page";
import { WorksPage } from "./pages/works-page/works-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, SocialMedia, HeroPage, AboutPage, SkillsPage, WorksPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
