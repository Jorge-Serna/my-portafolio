import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private languageSubject = new BehaviorSubject<any>( null );
  language$ = this.languageSubject.asObservable();

  languagesArray;

  constructor(){

    this.languagesArray = {};

  }


  setLanguage( ln ){
    
    var content = this.languagesArray.find( l => l.id == ln)

    this.languageSubject.next( content );
  }

  

  

}
