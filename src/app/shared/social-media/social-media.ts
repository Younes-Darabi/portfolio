import { Component, inject } from '@angular/core';
import { Languages } from './../../services/languages';

@Component({
  selector: 'app-social-media',
  imports: [],
  templateUrl: './social-media.html',
  styleUrl: './social-media.scss'
})
export class SocialMedia {
  languages = inject(Languages);
}
