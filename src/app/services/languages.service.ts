import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {

  translateService = inject(TranslateService)

  currentLang = signal(this.translateService.getCurrentLang());

  constructor(){
    this.translateService.onLangChange.subscribe( e => {
      this.currentLang.set( e.lang )
    })
  }

  setLanguage(lang: string){
    this.translateService.use(lang);
  }
  
}
