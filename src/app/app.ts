import { Component} from '@angular/core';
import { Menu } from "./shared/menu/menu";
import { SocialMedia } from "./shared/social-media/social-media";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Menu, SocialMedia, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
}
