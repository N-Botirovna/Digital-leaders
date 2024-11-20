/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter:['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       backgroundImage: {
//         'radial-custom': 'radial-gradient(178.87% 39.87% at 50% 100%, #FAF5FF 0%, #FAF5FF 23%, #FFFFFF 89.14%)',
//       },
//     },
//   },
//   plugins: [],
// }
