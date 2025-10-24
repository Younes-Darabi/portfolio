import { Component } from '@angular/core';
import { Project } from './../../interface/project';
import { ReferencesPage } from './references-page/references-page';

@Component({
  selector: 'app-works-page',
  imports: [ReferencesPage],
  templateUrl: './works-page.html',
  styleUrl: './works-page.scss'
})
export class WorksPage {
  projects: Project[] = [
    {
      name: 'Pollo Loco1',
      about: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript , HTML, CSS',
      experience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      image: 'assets/img/projects/pollo-loco.svg',
      githubUrl: '#',
      liveTestUrl: '#',
    }, {
      name: 'Pollo Loco2',
      about: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript , HTML, CSS',
      experience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      image: 'assets/img/projects/pollo-loco.svg',
      githubUrl: '#',
      liveTestUrl: '#',
    }, {
      name: 'Pollo Loco3',
      about: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript , HTML, CSS',
      experience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      image: 'assets/img/projects/pollo-loco.svg',
      githubUrl: '#',
      liveTestUrl: '#',
    }, {
      name: 'Pollo Loco4',
      about: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript , HTML, CSS',
      experience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      image: 'assets/img/projects/pollo-loco.svg',
      githubUrl: '#',
      liveTestUrl: '#',
    }, {
      name: 'Pollo Loco5',
      about: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript , HTML, CSS',
      experience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      image: 'assets/img/projects/pollo-loco.svg',
      githubUrl: '#',
      liveTestUrl: '#',
    },
  ]
}
