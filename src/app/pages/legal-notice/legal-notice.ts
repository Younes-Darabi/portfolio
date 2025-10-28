import { Component, inject } from '@angular/core';
import { Languages } from './../../services/languages';

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  languages = inject(Languages);
}
