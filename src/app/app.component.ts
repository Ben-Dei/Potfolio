import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { WhyMeComponent } from "./main-content/why-me/why-me.component";
import { MySkillsComponent } from "./main-content/my-skills/my-skills.component"
import { MyProjectsComponent } from "./main-content/my-projects/my-projects.component";
import { MyReferencesComponent } from './main-content/my-references/my-references.component';
import { ContactMeComponent } from "./main-content/contact-me/contact-me.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    MainContentComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent,
    MyReferencesComponent, ContactMeComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meinPotfolio';
}
