import { Component } from '@angular/core';
import { Project } from '../interface/project';

@Component({
  selector: 'app-my-work',
  imports: [],
  templateUrl: './my-work.html',
  styleUrl: './my-work.scss'
})
export class MyWork {
  projects: Project[] = [
    {
      id: 1,
      name: 'Pollo Loco1',
      about: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript , HTML, CSS',
      experience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      image: 'assets/img/projects/pollo-loco.svg',
      githubUrl: '#',
      liveTestUrl: '#',
    }, {
      id: 2,
      name: 'Pollo Loco2',
      about: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript , HTML, CSS',
      experience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      image: 'assets/img/projects/pollo-loco.svg',
      githubUrl: '#',
      liveTestUrl: '#',
    }, {
      id: 3,
      name: 'Pollo Loco3',
      about: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript , HTML, CSS',
      experience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      image: 'assets/img/projects/pollo-loco.svg',
      githubUrl: '#',
      liveTestUrl: '#',
    }, {
      id: 4,
      name: 'Pollo Loco4',
      about: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript , HTML, CSS',
      experience: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      image: 'assets/img/projects/pollo-loco.svg',
      githubUrl: '#',
      liveTestUrl: '#',
    }, {
      id: 5,
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
