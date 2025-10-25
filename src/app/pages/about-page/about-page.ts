import { Component, Input } from '@angular/core';
import { Translations } from './../../interface/language';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {
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
