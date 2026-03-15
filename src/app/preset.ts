import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';



const MyGreenPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50:  '#f6f7f3', // Dew
            100: '#e8e9e1', // Sage Bone
            200: '#d1d4c4', // Misty Leaf
            300: '#a7ae94', // Dusty Moss
            400: '#8b9376', // Olive Drab
            500: '#6b705c', // Base Green (Earth)
            600: '#5a5f4d', // Alpine
            700: '#4a4e40', // Deep Foliage
            800: '#3a3d32', // Evergreen
            900: '#2d362b', // Deep Forest
            950: '#1a1f18',  // Midnight Jungle
            1000:'#CD7F32'
        },
    }
});


export default  MyGreenPreset