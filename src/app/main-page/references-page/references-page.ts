import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Languages } from '../../services/languages';

@Component({
  selector: 'app-references-page',
  imports: [CommonModule],
  templateUrl: './references-page.html',
  styleUrl: './references-page.scss'
})
export class ReferencesPage {
  languages = inject(Languages);

  currentSlide = 0;

  nextSlide() {
    const total = this.languages.websiteLanguage.referencesPage.references.length;
    this.currentSlide = (this.currentSlide + 1) % total;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

    scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
