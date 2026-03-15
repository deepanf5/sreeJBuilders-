import { Routes } from '@angular/router';
import { Header } from './component/header/header';
import { Home } from './component/home/home';
import { ProjectOne } from './component/project-one/project-one';
import { Allprojects } from './component/allprojects/allprojects';

export const routes: Routes = [

    {
        path:'',
        component:Home
    },
    {
        path:'projects',
        component:Allprojects
    },
    {
        path:'projects/:id',
        component:ProjectOne
    }
];
