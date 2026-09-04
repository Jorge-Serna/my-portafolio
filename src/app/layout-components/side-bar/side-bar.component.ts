import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-side-bar',
    imports: [
      RouterLink,
      RouterLinkActive,
      TranslatePipe
    ],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
}
