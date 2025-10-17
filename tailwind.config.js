/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ag-primary': '#1c7c3c',
        'ag-primary-600': '#2e8b57',
        'ag-accent': '#9acb61',
        'ag-ink': '#0f172a',
        'ag-muted': '#667085',
        'ag-cream': '#f6f7f2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'prose': '80ch',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
