import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './shared/menu/menu';
import { SocialMedia } from './shared/social-media/social-media';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, SocialMedia],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
}