import { Component, Input } from '@angular/core';
import { Translations } from './../../interface/language';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.scss'
})
export class HeroPage {
  @Input() myLanguage!: string;
  language: any = Translations.en;
  ngOnChanges() {
    if (this.myLanguage == 'de') {
      this.language = Translations.de;
    } else {
      this.language = Translations.en;
    }
  }
}