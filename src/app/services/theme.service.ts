import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  theme = signal<'light' | 'dark'>('light');

  constructor(){
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (savedTheme) {
      this.theme.set(savedTheme);
      document.documentElement.setAttribute('data-bs-theme', savedTheme);
    }
  }

  toggleTheme( th: 'light' | 'dark' ){
    this.theme.set( th );
    document.documentElement.setAttribute('data-bs-theme', th);
    localStorage.setItem('theme', th);
  }
  
}
