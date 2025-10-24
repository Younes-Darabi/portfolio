import { Component } from '@angular/core';
import { Reference } from './../../../interface/reference';

@Component({
  selector: 'app-references-page',
  imports: [],
  templateUrl: './references-page.html',
  styleUrl: './references-page.scss'
})
export class ReferencesPage {
  References: Reference[] = [
    {
      name: 'James Rugman',
      projectName: 'Project Join',
      comment: '‘‘Michael is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
    }, {
      name: 'Evelyn Marx',
      projectName: 'Project DA Bubble',
      comment: '‘’ He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’',
    }, {
      name: 'Noah Mueller',
      projectName: 'Project Sharkie',
      comment: '‘Michael had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
    }
  ]
}
