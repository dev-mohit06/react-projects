/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#f3f5fa",
        'primary': "#3b3d3b",
        'secondary': "#b5b5b5",
        'success': "#20bf55",
        'danger': '#f44336',
        'border-color': "#e7ecf1",
      }
    },
  },
  plugins: [],
}

