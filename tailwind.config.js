/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      "2xs": "450px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': '1536px',
    },
    extend: {
      backgroundColor: {
        primary: "#0075FF",
      },
      colors: {
        primary: "#0075FF",
      },
    },
  },
  plugins: [],
};
