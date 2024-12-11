import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { NavbarComponent } from "./main-content/navbar/navbar.component";
import { WhyMeComponent } from "./main-content/why-me/why-me.component";
import { MySkillsComponent } from "./main-content/my-skills/my-skills.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    MainContentComponent, NavbarComponent, WhyMeComponent, MySkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meinPotfolio';
}
