import { Component , Input} from '@angular/core';
import { Translations } from './../../../interface/language';

@Component({
  selector: 'app-references-page',
  imports: [],
  templateUrl: './references-page.html',
  styleUrl: './references-page.scss'
})
export class ReferencesPage {
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
