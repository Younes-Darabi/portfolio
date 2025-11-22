import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Languages } from '../services/languages';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterModule],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  languages = inject(Languages);
}
