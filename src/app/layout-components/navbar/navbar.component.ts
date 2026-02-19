import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  language: string = 'EN'
  theme: 'light' | 'dark' = 'light';

  changeLanguage(e: Event){
    var element:any = e.target as HTMLElement;
    var value:any = element.id;
    this.language = value;
  }

  setTheme(e: Event){
    const element = e.target as HTMLElement;
    this.theme = element.id == 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', this.theme);
  }

}
