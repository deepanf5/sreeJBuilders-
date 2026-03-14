import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    providePrimeNG({
           theme: {
                preset: Lara,
                options: {
                    darkModeSelector: '.my-app-dark', 
                    cssLayer: false
                }
            }
        })
  ]
};
