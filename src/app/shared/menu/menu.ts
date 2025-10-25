import { Component, Input } from '@angular/core';
import { Translations } from './../../interface/language';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
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
