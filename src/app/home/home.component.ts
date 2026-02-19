import { Component, OnInit } from '@angular/core';
import texts from '../../assets/texts.json';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    console.log(texts)
  }



}
