import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [RouterOutlet, NavbarComponent, SideBarComponent]
})
export class LayoutComponent {

}
