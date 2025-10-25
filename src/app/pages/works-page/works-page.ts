import { Component, Input } from '@angular/core';
import { Translations } from './../../interface/language';
import { ReferencesPage } from './references-page/references-page';

@Component({
  selector: 'app-works-page',
  imports: [ReferencesPage],
  templateUrl: './works-page.html',
  styleUrl: './works-page.scss'
})
export class WorksPage {
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
