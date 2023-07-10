import styled,{createGlobalStyle,css} from 'styled-components'
import { QUERIES } from '@/lib/mediaQueries'

export const GlobalStyles = createGlobalStyle`
    :root{
        // COLORS
        --color-pry-100: hsl(22, 65%, 57%);
        --color-pry-200: hsl(0, 0%, 6%);
        --color-pry-300: hsl(0, 0%, 95%);
        --color-pry-400: hsl(0, 0%, 98%);
        --color-pry-500: hsl(0, 0%, 89%);
        --color-pry-600:  hsl(0, 0%, 81%);
        --color-sec-100: hsl(21, 94%, 75%);
        --color-sec-200: hsl(0, 0%, 100%);
        --color-sec-300: hsl(0, 0%, 0%);
        --color-sec-400: hsl(0, 0%, 10%);
        --color-sec-500: hsl(0, 0%, 95%);
        --color-sec-600: hsl(0, 0%, 90%);
        --color-sec-700: hsl(0, 0%, 48%);

        // FONTS
        --font-pry-100: 'Manrope', sans-serif;
        --font-weight-100: 200;
        --font-weight-200: 400; 
        --font-weight-300: 500; 
        --font-weight-400: 700;
        
        // WIDTH
        --max-container: 69.375rem;
        --center-container: 0 auto;
        
        //BORDER
        --border-radius: 0.5rem;

        //ANIMATION 
        --transition: all 0.5s;
    }
`