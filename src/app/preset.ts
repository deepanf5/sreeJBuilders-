import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';



const MyGreenPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50:  '#e6e9f3',  // Very Pale Blue
100: '#c5cee6',  // Soft Sky
200: '#9eb0d6',  // Light Blue
300: '#778fc2',  // Powder Blue
400: '#566fb0',  // Medium Blue
500: '#3a5399',  // Base Blue
600: '#2e437b',  // Deep Blue
700: '#22335c',  // Dark Blue
800: '#172554',  // Midnight Blue (your main color)
900: '#0e172f',  // Very Dark Blue
950: '#070d1a',  // Almost Black Blue
1000:'#000812'   // Deepest Shade
        },
    }
});


export default  MyGreenPreset