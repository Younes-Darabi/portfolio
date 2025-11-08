import { Component, inject, HostListener, OnInit } from '@angular/core';
import { Languages } from './../../../services/languages';
import { ReferencesPage } from './references-page/references-page';

@Component({
  selector: 'app-works-page',
  standalone: true,
  imports: [ReferencesPage],
  templateUrl: './works-page.html',
  styleUrls: ['./works-page.scss'],
})
export class WorksPage implements OnInit {
  languages = inject(Languages);
  showMore: boolean[] = [];
  isMobile: boolean = false;

  ngOnInit() {
    this.checkIfMobile();

    const count = this.languages.websiteLanguage.myWorks.projects.length;
    this.showMore = new Array(count).fill(false);
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 800;
  }

  toggleShowMore(index: number) {
    this.showMore[index] = !this.showMore[index];
  }

    scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
