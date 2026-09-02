import { Routes } from '@angular/router';
import { LayoutComponent } from './layout-components/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectMbeComponent } from './projects/project-mbe/project-mbe.component';
import { ProjectsMenuComponent } from './projects/projects-menu/projects-menu.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { 
            path: '',
            redirectTo: 'home',
            pathMatch: 'full' 
        },
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'projects',
            component: ProjectsComponent,
            children: [
                {
                    path: '',
                    component: ProjectsMenuComponent
                },
                {
                    path: 'mbe',
                    component: ProjectMbeComponent
                }
            ]
        }
    ] },
];
