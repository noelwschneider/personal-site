/*
  TODO:

    set up variables for css modules
    set up tailwind variables
      https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts
    decide font scheme
      a sans and a serif for each of these categories:
        title
        header
        body
        caption
        secondary
*/

import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--inter', 
});
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--lusitana',
});