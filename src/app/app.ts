import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './shared/menu/menu';
import { FooterRes } from './shared/footer-res/footer-res';
import { SocialMedia } from './shared/social-media/social-media';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu, SocialMedia, FooterRes],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App { }
