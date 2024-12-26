/** @type {import('tailwindcss').Config} */
const Config = {
    content: ['./components/**/*.{twig,js,scss}','./templates/**/*.html.twig'],
    theme: {
      fontFamily: {
        'base': ['Helvetica', 'Arial', 'sans-serif'],
      },
      extend: {
        colors: {
          'mid-blue': '#2a6fdb',
          'light-blue': '#6592fd',
          'green': '#58b368',
          'red': '#e74645',
          'magenta': '#8a00d4',
          'orange': '#fb7756',
          'grey-blue': '#2c698d',
          'dark-blue': '#292a73',
          'eggshell': '#f1e8e6',
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
  