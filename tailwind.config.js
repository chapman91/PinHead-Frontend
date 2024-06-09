/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primarykeycolor: {
          primary: '#EF3C40',
          onprimary: '#FFFFFF',
          primarycontainer: '#3C99EF',
          onprimarycontainer: '#3C99EF'
        },
        secondarykeycolor: {
          secondary: '#0A0A09',
          onsecondary: '#D9D9D9',
          onsecondarycontainer: '#D9D9D9',
        },
        teritarykeycolor:{
          teritary: '#EDC42E',
          teritarycontainer: '#642EED',
          onteritarycontainer: '642EED'
        } 
      },
    fontFamily: {
      sans: ['Lalezar', 'sans-serif'],
    }
    },
  },
  plugins: [],
}

