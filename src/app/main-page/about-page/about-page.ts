import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Languages } from '../../services/languages';

@Component({
  selector: 'app-about-page',
  imports: [RouterModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {
  languages = inject(Languages);

    scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
