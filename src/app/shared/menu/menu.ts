import { Component,inject} from '@angular/core';
import { Languages} from './../../services/languages';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
    languages = inject(Languages);
}
