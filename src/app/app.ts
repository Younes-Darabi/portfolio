import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './shared/menu/menu';
import { SocialMedia } from './shared/social-media/social-media';
import { Hero } from './hero/hero';
import { WhyMe } from './why-me/why-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, SocialMedia, Hero, WhyMe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
