import { Component, inject } from '@angular/core';
import { Languages } from './../../../../services/languages';

@Component({
  selector: 'app-references-page',
  imports: [],
  templateUrl: './references-page.html',
  styleUrl: './references-page.scss'
})
export class ReferencesPage {
  languages = inject(Languages);
}
