// import "./storybook.css";
// import "../assets/css/tailwind.css";
// import "../assets/css/style.css";

// Automatically create controls where the control type arg for a story is:
// - 'background' or 'color' = color picker
// - 'Date' = date picker
/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        xs: {
          name: "XS: Small mobile",
          styles: { width: "320px", height: "570px" },
        },
        sm: {
          name: "SM: Large mobile",
          styles: { width: "534px", height: "854px" },
        },
        md: {
          name: "MD: Portrait tablet",
          styles: { width: "768px", height: "1024px" },
        },
        // 992px = 1024px with allowance for scrollbars
        lg: {
          name: "LG: Landscape tablet, small desktop",
          styles: { width: "992px", height: "768px" },
        },
        // 1200px = 1280px with allowance for scrollbars
        xl: {
          name: "XL: Large desktop",
          styles: { width: "1200px", height: "800px" },
        },
        // 1400px = 1440px with allowance for scrollbars
        xxl: {
          name: "2XL: Extra large desktop",
          styles: { width: "1400px", height: "900px" },
        },
      },
      defaultViewport: "xs",
    },
  },
};

export default preview;
