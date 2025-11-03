import { Component , inject } from '@angular/core';
import { Languages } from './../../services/languages';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-res',
  imports: [RouterModule],
  templateUrl: './footer-res.html',
  styleUrl: './footer-res.scss'
})
export class FooterRes {
  languages = inject(Languages);
}
