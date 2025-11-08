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
  navMenu = false;
  languages = inject(Languages);
  activeSection: string = '';

  showMenu(value: boolean) {
    this.navMenu = value;
  }

  setActive(section: string) {
    this.activeSection = section;
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
