import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CoreService } from '../../core.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  section;
  language: string;
  theme: 'light' | 'dark' = 'light';

  constructor( private coreService: CoreService ){}

  ngOnInit(): void {

    this.coreService.language$.subscribe( data => {
      var x = data;
      this.section = x?.sections.find( s => s.id === 'navbar')
    })

    var local = localStorage.getItem('js-app-language');
    this.language = local ? local : 'en';

    this.coreService.setLanguage( this.language );
    
  }


  setLanguage(id){
    
    
    this.language = id;


    this.coreService.setLanguage( id )
  }

  setTheme(e: Event){
    const element = e.target as HTMLElement;
    this.theme = element.id == 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', this.theme);
  }

}
