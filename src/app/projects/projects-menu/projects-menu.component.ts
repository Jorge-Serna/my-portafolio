import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-menu',
  imports: [
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './projects-menu.component.html',
  styleUrl: './projects-menu.component.scss',
})
export class ProjectsMenuComponent {

}
