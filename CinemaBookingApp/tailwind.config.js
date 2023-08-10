/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/views/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        grey: '#333333',
      },
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
    },
  },
  plugins: [],
};
