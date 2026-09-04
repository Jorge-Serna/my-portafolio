import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, NgFor],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  theme: 'light' | 'dark' = 'light';


  ngOnInit(): void {

    // var localTheme = localStorage.getItem(('js-app-theme') as 'light' | 'dark') || 'ligth';
    // this.theme = localTheme ? localTheme : 'light';
    
  }

  onChangeTheme(e: Event){

    const element = e.target as HTMLElement;

    this.theme = element.id === 'dark' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-bs-theme', this.theme);

    window.localStorage.setItem('js-app-theme', element.id)

  }

  setLanguage(sth){}

}
