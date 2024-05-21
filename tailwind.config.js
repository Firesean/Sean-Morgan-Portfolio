/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      xs: "400",
      sm: '640px',
      md: '768px',
      lg: '1100px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}