import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
    ,
    {
        path: 'resume',
        component: ResumeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
