/** @type {import('tailwindcss').Config} */
const Config = {
  content: ["./components/**/*.{twig,js,scss}", "./templates/**/*.html.twig"],
  theme: {
    fontFamily: {
      base: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "mid-blue": "#3b82f6",
        "light-blue": "#38bdf8",
        green: "#22c55e",
        red: "#dc2626",
        magenta: "#d946ef",
        orange: "#f97316",
        "grey-blue": "#334155",
        "dark-blue": "#1e3a8a",
        eggshell: "#ffe4e6",
        white: "#ffffff",
        black: "#000000",
        "burnt-orange": "#9a3412",
      },
      // Font size is relative to the font size set on the body with typi as a percentage.
      fontSize: {
        // Font-size: 15px
        xs: ".74rem",
        // Font-size: 16px
        sm: ".82rem",
        // Font-size: 20px
        base: "1rem",
        // Font-size: 20px
        md: "1rem",
        // Font-size: 20px
        lg: "1.1rem",
        // Font-size: 24px
        xl: "1.2rem",
        // Font-size: 28px
        "2xl": "1.4rem",
        // Font-size: 30px
        "3xl": "1.5rem",
        // Font-size: 34px
        "4xl": "1.7rem",
        // Font-size: 40px
        "5xl": "2rem",
        // Font-size: 43px
        "6xl": "2.15rem",
        // Font-size: 51px
        "7xl": "2.55rem",
      },
    },
    screens: {
      sm: "534px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },
  plugins: [],
  prefix: "u-",
  safelist: [],
};

// Make the custom colours available as border and background colour classes.
for (const colour in Config.theme.extend.colors) {
  Config.safelist.push(`${Config.prefix}border-${colour}`);
  Config.safelist.push(`${Config.prefix}bg-${colour}`);
}

export default Config;
