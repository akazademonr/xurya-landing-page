/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /* Primary font - Manrope */
        sans: ['var(--font-primary)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        
        /* Add more font families here as needed */
        // primary: ['var(--font-primary)', 'sans-serif'],
        // secondary: ['var(--font-secondary)', 'sans-serif'],
        // mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
