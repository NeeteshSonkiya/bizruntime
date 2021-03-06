
import { Component } from '@angular/core';

@Component({
  selector: 'd8',
  template: `
    <ul>
        <li *ngFor="let c1 of courses; index as i">
            index {{ i + 1}} and {{ "Course with id as " + c1.id + "  and name " + c1.name }}
        </li>
    </ul>

  `,
  
})
export class D8Component {
    courses = [
        {id: 1, name: 'java'},
        {id: 2, name: 'j2ee'},
        {id: 3, name: 'angular'},
        {id: 4, name: 'hadoop'}
    ];
}

