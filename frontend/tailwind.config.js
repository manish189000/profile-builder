/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lgry: "var(--light-Grey)",
        blk: "var(--black)",
        scrlt: "var(--scarlet)",
        oliv: "var(--lightOlive)",
        lteal: "var(--lightTeal)",
        dbeige: "var(--darkBeige)",
      },
      animation: {
        "spin-slow": "spin 2.5s linear infinite",
      },
      fontFamily: {
        // poppins: ["Poppins"],
        Edx: ["Eudoxus Sans"],
        // poppins: ["Eudoxus Sans"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter"],
        os: ["Open Sans"],
        mons: ["Montserrat"],
        rubik: ["Rubik Doodle Shadow", "system-ui"],
        ralewy: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      "2xl": { max: "1400px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      air: { max: "820px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      lg2: { max: "740px" },
      m480: { max: "480px" },
    },
  },
  plugins: [],
};
