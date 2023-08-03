/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/views/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins_black: 'Poppins-Black',
        poppins_bold: 'Poppins-Bold',
        poppins_extrabold: 'Poppins-ExtraBold',
        poppins_extralight: 'Poppins-ExtraLight',
        poppins_light: 'Poppins-Light',
        poppins_medium: 'Poppins-Medium',
        poppins_regular: 'Poppins-Regular',
        poppins_semibold: ['Poppins-SemiBold', 'serif'],
        poppins_thin: 'Poppins-Thin',
      },
      textColor: {
        whiteRGBA75: 'rgba(255,255,255,0.75)',
        whiteRGBA50: 'rgba(255,255,255,0.50)',
        whiteRGBA32: 'rgba(255,255,255,0.32)',
        whiteRGBA15: 'rgba(255,255,255,0.15)',
        blackRGB10: 'rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
