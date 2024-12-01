import { defineConfig } from "vite"
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: '/storybook-twig-component-library/',
  plugins: [
    // Other vite plugins.
    twig({
      namespaces: {
        base: join(__dirname, "components/00-base"),
        atoms: join(__dirname, "components/01-atoms"),
        molecules: join(__dirname, "components/02-molecules"),
        organisms: join(__dirname, "components/03-organisms"),
        templates: join(__dirname, "components/04-templates"),
        pages: join(__dirname, "components/05-pages"),
        // Other namespaces as required.
      },
      // Optional if you are using React storybook renderer. The default is 'html' and works with storybook's html
      // renderer.
      // framework: 'react' 
    }),
    // Other vite plugins.
  ],
  build: {
    assetsDir: "assets", // Ensure assets are placed in a consistent folder
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
})