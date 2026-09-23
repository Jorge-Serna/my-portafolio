import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LanguagesService } from '../../services/languages.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-navbar',
    imports: [
      RouterLink,
      CommonModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentLang
  currentTheme

  constructor( 
    private languagesService: LanguagesService,
    private themeService: ThemeService
  ){
    this.currentLang = languagesService.currentLang;
    this.currentTheme = themeService.theme;
  }

  onChangeTheme(th: 'light' | 'dark'){
    this.themeService.toggleTheme(th);
  }

  changeLanguage(lang: string){
    this.languagesService.setLanguage( lang );
  }

}
