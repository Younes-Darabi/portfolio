import { Component } from '@angular/core';
import { Skill } from './../interface/skill';

@Component({
  selector: 'app-my-skill',
  imports: [],
  templateUrl: './my-skill.html',
  styleUrl: './my-skill.scss'
})
export class MySkill {
  skills: Skill[] = [
    {
      name: 'Angular',
      image: '/assets/img/icons/my-skills/frontend/angular.svg'
    },
    {
      name: 'TypeScript',
      image: '/assets/img/icons/my-skills/frontend/ts.svg'
    },
    {
      name: 'JavaScript',
      image: '/assets/img/icons/my-skills/frontend/Javascript.svg'
    },
    {
      name: 'HTML',
      image: '/assets/img/icons/my-skills/frontend/html.svg'
    },    {
      name: 'CSS',
      image: '/assets/img/icons/my-skills/frontend/css.svg'
    },
    {
      name: 'REST-API',
      image: '/assets/img/icons/my-skills/frontend/api.svg'
    },
    {
      name: 'Firebase',
      image: '/assets/img/icons/my-skills/frontend/Firebase.svg'
    },
    {
      name: 'Git',
      image: '/assets/img/icons/my-skills/frontend/git.svg'
    },    {
      name: 'Scrum',
      image: '/assets/img/icons/my-skills/frontend/scrum.svg'
    },
    {
      name: 'Material design',
      image: '/assets/img/icons/my-skills/frontend/material-design.svg'
    },
    {
      name: 'Challange me',
      image: '/assets/img/icons/my-skills/frontend/challange-me.svg'
    },
  ]
}
