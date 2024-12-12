import { Component} from '@angular/core';
import { SkillIcon } from '../../shared/interfaces/skill-icon.interface';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skillIcons: SkillIcon[] = [
    { path: "./assets/img/angular-symbol.png" },
    { path: "./assets/img/type-script-symbol.png" },
    { path: "./assets/img/js-symbol.png" },
    { path: "./assets/img/html-symbol.png" },
    { path: "./assets/img/css-symbol.png" },
    { path: "./assets/img/api-icon.png" },
    { path: "./assets/img/firebase-symbol.png" },
    { path: "./assets/img/git-icon.png" },
    { path: "./assets/img/scrum-icon.png" },
  ]
}
