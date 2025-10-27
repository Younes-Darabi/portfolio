import { Component, inject } from '@angular/core';
import { Languages } from './../../services/languages';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {
  languages = inject(Languages);
}
