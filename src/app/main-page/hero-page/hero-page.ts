import { Component, inject } from '@angular/core';
import { Languages } from '../../services/languages';
@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.scss'
})
export class HeroPage {
  languages = inject(Languages);

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}