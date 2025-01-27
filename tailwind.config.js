/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        CairoPlay: ["Cairo Play", "sans-serif"],
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      },
    },
  },
  plugins: [],
};
