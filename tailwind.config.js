/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom': 'rgb(17, 29, 49)',
      },
    },
  },
  plugins: [],
};
