import type { Config } from 'tailwindcss';
import headlessui from '@headlessui/tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        background: 'rgba(var(--background))',
        foreground: 'rgba(var(--foreground))',
        primary: 'rgba(var(--primary))',
        secondary: 'rgba(var(--secondary))',
      },
    },
  },
  plugins: [headlessui],
} satisfies Config;
