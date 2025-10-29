import { Component,inject} from '@angular/core';
import { Languages} from './../../services/languages';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
    languages = inject(Languages);
}
