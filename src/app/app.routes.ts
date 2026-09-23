import { Routes } from '@angular/router';
import { LayoutComponent } from './layout-components/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectMbeComponent } from './projects/project-mbe/project-mbe.component';
import { ProjectsMenuComponent } from './projects/projects-menu/projects-menu.component';
import { BlogComponent } from './blog/blog.component';
import { BlogMenuComponent } from './blog/blog-menu/blog-menu.component';
import { BlogArticle1Component } from './blog/blog-article-1/blog-article-1.component';
import { BlogArticle2Component } from './blog/blog-article-2/blog-article-2.component';

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
        },
        {
            path: 'blog',
            component: BlogComponent,
            children: [
                {
                    path:'',
                    component: BlogMenuComponent
                },
                {
                    path: 'article-1',
                    component: BlogArticle1Component
                },
                {
                    path: 'article-2',
                    component: BlogArticle2Component
                }
            ]
        }
    ] },
];
