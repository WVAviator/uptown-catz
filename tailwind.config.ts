import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          extend: 'light',
          layout: {},
          colors: {
            default: '#000000',
            primary: '#E4B870',
            secondary: '#F4AF9E',
            background: {
              DEFAULT: '#F6FFFE',
              '50': '#F6FFFE',
              '100': '#ECFFFE',
              '200': '#E2FFFD',
              '300': '#D9FFFD',
              '400': '#CFFFFC',
              '500': '#c5fffc',
            },
          },
        },
      },
    }),
  ],
};
export default config;
