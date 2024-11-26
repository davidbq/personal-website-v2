/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    {
      pattern: /^(p|px|py|pt|pb|pl|pr)-\d+$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9FAFB',
        secondary: '#868D97',
        accent: {
          DEFAULT: '#0296BE',
          light: '#66C5E3',
        },
        background: '#0A0A0A',
      },
      screens: {
        ms: '700px',
        custom: '995px',
      },
    },
  },
  plugins: [],
};
