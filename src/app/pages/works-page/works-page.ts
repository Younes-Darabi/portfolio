import { Component,inject} from '@angular/core';
import { Languages} from './../../services/languages';
import { ReferencesPage } from './references-page/references-page';

@Component({
  selector: 'app-works-page',
  imports: [ReferencesPage],
  templateUrl: './works-page.html',
  styleUrl: './works-page.scss'
})
export class WorksPage {
  languages = inject(Languages);
}
