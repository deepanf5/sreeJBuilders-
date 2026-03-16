import { Routes } from '@angular/router';
import { Header } from './component/header/header';
import { Home } from './component/home/home';
import { ProjectOne } from './component/project-one/project-one';
import { Allprojects } from './component/allprojects/allprojects';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent:() => import('../app/component/home/home').then(c => c.Home)
    },
    {
        path: 'projects',
       loadComponent:() => import('../app/component/allprojects/allprojects').then(c => c.Allprojects)
    },
    {
        path: 'project/:id',
        loadComponent:() => import('../app/component/project-one/project-one').then(c => c.ProjectOne)
    },
    {
        path: 'team',
        loadComponent:() => import('../app/component/team/team').then(c => c.Team)
    }
];
