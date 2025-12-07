import { Component, EventEmitter, inject, Output } from '@angular/core';
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
  activeLanguage: string = 'en';
  @Output() onScrollRequest = new EventEmitter<string>();

  showMenu(value: boolean) {
    this.navMenu = value;
  }

  setActive(section: string) {
    this.activeSection = section;
  }

  setActiveLanguage(language: string) {
    this.activeLanguage = language;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  scrollToRight(id: string) {
    this.onScrollRequest.emit(id);
  }
}
