/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "intro-desktop": "url('/bg-intro-desktop.svg')",
        "intro-mobile": "url('/bg-intro-mobile.svg')",
      },
    },
  },
  plugins: [],
};
