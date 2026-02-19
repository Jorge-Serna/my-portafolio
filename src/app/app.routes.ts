import { Routes } from '@angular/router';
import { LayoutComponent } from './layout-components/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'projects', component: ProjectsComponent }
    ] },
];
