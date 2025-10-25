import { Component, Input } from '@angular/core';
import { Translations } from './../../interface/language';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {
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