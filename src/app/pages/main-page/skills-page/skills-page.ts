import { Component, inject } from '@angular/core';
import { Languages } from './../../../services/languages';

@Component({
  selector: 'app-skills-page',
  imports: [],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.scss'
})
export class SkillsPage {
  languages = inject(Languages);

    scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
