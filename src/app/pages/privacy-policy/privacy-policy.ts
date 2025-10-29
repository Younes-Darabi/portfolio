import { Component, inject } from '@angular/core';
import { Languages } from './../../services/languages';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-privacy-policy',
  imports: [RouterModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
  languages = inject(Languages);
}
