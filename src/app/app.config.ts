
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
            preset: Lara, // This sets the Lara look
            options: {
              darkModeSelector: 'none',
              cssLayer: false,
            // This is how you change the color to Teal in v19+
            primary: {
                50:  '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4',
                300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', // Teal 500
                600: '#0d9488', 700: '#0f766e', 800: '#115e59',
                900: '#134e4a', 950: '#042f2e'
            }
        }
        }
        })
  ]
};
