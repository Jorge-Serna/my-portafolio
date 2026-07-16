import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CoreService } from '../../core.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-side-bar',
    imports: [RouterLink, NgFor],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {

  @ViewChildren('sectionBtn') sectionBtns!: QueryList<ElementRef>
  section;
  
  constructor( private coreService: CoreService ){}

  ngOnInit(): void {

    this.coreService.language$.subscribe( data => {
      var x = data;
      this.section = x?.sections.find( s => s.id === 'sidebar');

    })
  }

  selectSection( e: Event){

    this.clearSections();

    var element = e.target as HTMLElement;
    element.classList.add('selected')

  }

  clearSections(){
    this.sectionBtns.forEach( btn => {

      if(btn.nativeElement.classList.contains('selected')){
        btn.nativeElement.classList.remove('selected')
      }

    })

  }

}
