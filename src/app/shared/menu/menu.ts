import { Component, inject } from '@angular/core';
import { Languages } from './../../services/languages';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  navMenu = true;
  languages = inject(Languages);

  showMenu(value: boolean) {
    this.navMenu = value;
  }

  activeSection: string = '';
  setActive(section: string) {
    this.activeSection = section;
  }
}
