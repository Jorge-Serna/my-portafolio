import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-home',
    imports: [
      RouterLink
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  section;

  constructor( private coreService: CoreService ){}

  ngOnInit(): void {

    this.coreService.language$.subscribe( data => {
      var x = data;
      this.section = x?.sections.find( s => s.id === 'home')

    })
    
  }



}
