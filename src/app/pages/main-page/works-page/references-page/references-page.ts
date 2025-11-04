import { Component, inject, signal } from '@angular/core';
import { Languages } from './../../../../services/languages';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references-page',
  imports: [CommonModule],
  templateUrl: './references-page.html',
  styleUrl: './references-page.scss'
})
export class ReferencesPage {
  languages = inject(Languages);
}
