/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          condiment: ['"Condiment"', 'cursive'],
          kalam: ['"Kalam"', 'cursive'],
          permanent: ['"Permanent Marker"', 'cursive'],
          satisfy: ['"Satisfy"', 'cursive'],
          playwriteLoopet: ['"PlaywriteDKUloopet"', 'cursive'],
          playwriteModerne: ['"PlaywriteFRModerne"', 'cursive'],
        },
      },
    },
    plugins: [],
  }