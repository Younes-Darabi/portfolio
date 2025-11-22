import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Languages } from '../services/languages';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
  languages = inject(Languages);
}
