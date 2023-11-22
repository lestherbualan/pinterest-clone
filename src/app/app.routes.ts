import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { 
        path: '',
        // - Lazy loading component
        loadChildren: () => import('./landing-module/landing-module.module').then(module => module.LandingModuleModule)
    }
];
