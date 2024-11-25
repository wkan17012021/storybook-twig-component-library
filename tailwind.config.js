/** @type {import('tailwindcss').Config} */
const Config = {
    content: ['./components/**/*.{twig,js,scss}','./templates/**/*.html.twig'],
    theme: {
      fontFamily: {
        'base': ['Barlow', 'Roboto', 'sans-serif'],
      },
      extend: {
        colors: {
          'mid-blue': '#00a2c7',
          'light-blue': '#00B6DE',
          'green': '#33A85B',
          'burnt-orange': '#D83C29',
          'magenta': '#B62584',
          'ochre': '#FFA202',
          'grey-blue': '#005B6F',
          'dark-blue': '#012E38',
          'neutral-grey': '#F2F2F2',
          'white': '#ffffff',
          'black': '#000000',
        },
        // Font size is relative to the font size set on the body with typi as a percentage.
        fontSize: {
          // Font-size: 14px
          'xs': '.78rem',
          // Font-size: 16px
          'sm': '.89rem',
          // Font-size: 18px
          'base': '1rem',
          // Font-size: 20px
          'lg': '1.12rem',
          // Font-size: 24px
          'xl': '1.34rem',
          // Font-size: 28px
          '2xl': '1.56rem',
          // Font-size: 30px
          '3xl': '1.69rem',
          // Font-size: 34px
          '4xl': '1.9rem',
          // Font-size: 40px
          '5xl': '2.23rem',
          // Font-size: 42px
          '6xl': '2.35rem',
          // Font-size: 51px
          '7xl': '2.84rem',
          '8xl': '2.84rem',
          '9xl': '2.84rem',
        },
      },
      screens: {
        'sm': '534px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
    },
    plugins: [],
    prefix: 'u-',
    safelist: []
  };
  
  // Make the custom colours available as border and background colour classes.
  for (const colour in Config.theme.extend.colors) {
    Config.safelist.push(`${Config.prefix}border-${colour}`);
    Config.safelist.push(`${Config.prefix}bg-${colour}`);
  }
  
  export default Config;
  