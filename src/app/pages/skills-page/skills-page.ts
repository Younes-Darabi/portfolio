import { Component, Input } from '@angular/core';
import { Translations } from './../../interface/language';

@Component({
  selector: 'app-skills-page',
  imports: [],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.scss'
})
export class SkillsPage {
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
