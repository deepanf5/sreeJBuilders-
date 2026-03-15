
import { providePrimeNG } from 'primeng/config';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withFetch} from '@angular/common/http'




import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import MyGreenPreset from './preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),     
provideHttpClient(withFetch()),
    providePrimeNG({
      theme: {
        preset: MyGreenPreset,
        options: {
          darkModeSelector: 'none',
          cssLayer: false,
        }
      }
    })
  ]
};
