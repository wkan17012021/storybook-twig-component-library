# Storybook Twig Component Library

A Storybook-powered component library for building and documenting HTML/twig-based components. This repository is set up using **Vite** as the bundler and **Storybook** for developing, testing, and prototyping.

## Table of Contents
- [Getting Started](#getting-started)
- [Improvements](#improvements)

---

## Getting Started

### Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org) (version 18 or later)
- [NPM](https://npmjs.com)

### Installation
1. Clone this repository
2. cd into the folder
3. npm i
4. See the package.json to run the scripts for building: icons, scss, tailwind css etc. Execute these first before starting the server e.g.
```bash
npm run build:icons && npm run tw:config-export && npm run build:all
```
5. Build the server 
```bash
npm run sb:build && npm run sb:start
```
The Storybook environment should be available at http://localhost:6006 be default.


### Intro
- The components directory follows a structured atomic design approach. Basic building elements 'atoms' are arranged to construct more meaningful components 'molecules'. Molecules and/or atoms are then combined to create complex blocks of UI features.
- Each component comprises a twig template and story.js script for mocking data - Drupal CMS is assumed as the actual data for field values. For some, there is an additional scss file and js script. Note that the js was written to work in the Drupal context and so, will not work in storybook.


## Improvements
1. Replace SASS with Native CSS
- Evaluate current SCSS usage in the project
- Where applicable, replace SCSS with native CSS features such as: CSS custom properties; CSS nesting (in supported browsers).
- Update the build process to remove the node-sass dependency and reduce complexity.

2. Resolve Storybook Icon Assets Without Static Plugin
- Investigate ways to use the public/ directory in Vite for static assets, avoiding the need for the vite-plugin-static-copy package.
- Ensure that icons.svg is accessible via an absolute or relative path using Vite’s built-in asset handling.
- Simplify the configuration by relying on Vite’s default public/ directory behavior to copy and serve static assets.