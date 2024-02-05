// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         pop: ["Poppins"],
//         inter: ["Inter"],
//         os: ["Open Sans"],
//         mons: ["Montserrat"],
//       },
//     },
//     screens: {
//       "2xl": { max: "1400px" },
//       xl: { max: "1279px" },
//       lg: { max: "1023px" },
//       air: { max: "820px" },
//       md: { max: "767px" },
//       sm: { max: "639px" },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
        inter: ["Inter"],
        os: ["Open Sans"],
        mons: ["Montserrat"],
      },
    },
    screens: {
      "2xl": { max: "1400px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      air: { max: "820px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
